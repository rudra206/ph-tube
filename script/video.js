//1 -Fetch,Load and show Categories on html


//create loadCategories
const loadCategories = () => {
    //fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};


//Create DisplayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((item) => {
        console.log(item);
        // create a button
        const buttonContainer = document.createElement("div");
        /*  button.classList = "btn";
         button.innerText = item.category;*/

        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideo (${item.category_id})" class ="btn category-btn">
        ${item.category}
        </button>
        `;
        /* button.onclick = ()=>{alert("hello")} ; */

        //add button to category container
        categoryContainer.append(buttonContainer);
    });
};

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    console.log(buttons);
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
}

const loadCategoryVideo = (id) => {
    // alert (id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((res) => res.json())
        /*.then((data) => displayVideos(data.category))*/
        .then((data) => {
            // sobaike active class remove korao
            removeActiveClass();
            // id er class k active korao

            const activeBtn = document.getElementById(`btn-${id}`)
            activeBtn.classList.add("active");
            displayVideos(data.category)
        })
        .catch((error) => console.log(error));
};

const loadDetails = async (videoId) => {
    console.log(videoId);
    const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(uri);
    const data = await res.json();
   console.log(data);
   displayDetails(data.video)

}

const displayDetails = (video) => {
    console.log(video);
    const detailContainer = document.getElementById("modal-content");
    detailContainer.innerHTML = `
<img src=${video.thumbnail}/>
<p>${video.description}</p>
`;

    ///way-1
    document.getElementById("showModalData").click();

    //way-2
    //document.getElementById("customModal").showModal();

};


//create videos
const loadVideos = (searchText = '') => {
    //fetch data
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title= ${searchText}`)
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error));
};

// const cardDemo =
// {
//     category_id: "1001",
//     video_id: "aaab",
//     thumbnail: "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     title: "Midnight Serenade",
//     authors: [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     others: {
//         views: "543K",
//         posted_date: " "
//     },
//     description: "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }
function getTimeString(time) {
    //get hour and rest seconds
    const day = parseInt(time / 86400);
    let remainingSecond1 = time % 86400;
    const hour = parseInt(remainingSecond1 / 3600);
    let remainingSecond2 = remainingSecond1 % 3600;
    let minute = parseInt(remainingSecond2 / 60);
    const second = remainingSecond2 % 60;
    return `${day} day ${hour} hour  ${minute} minutes  ${second} second ago`
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = " ";

    if (videos.length == 0) {
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col justify-center items-center">
        <img src="assets/Icon.png"/>
        <h2 class= " font-bold text-center text-xl ">
        No Content Here in this Category.
        </h2>
        </div>
        `;
        return;
    }
    else {
        videoContainer.classList.add("grid");
    }

    videos.forEach(video => {
        //  console.log(video);
        //create card
        const card = document.createElement('div');
        card.classList = "card card-compact "
        card.innerHTML = `
<figure class ="relative h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-fill w-full object-cover"
      alt="Shoes" />
      ${video.others.posted_date?.length == 0 ? " " :
                `  <span class ="absolute text-xs right-2 bottom-2 bg-black rounded p-1 text-white">
      ${getTimeString(video.others.posted_date)}</span> `}
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div>
        <img class="h-10 w-10 rounded-full object-cover" 
        src=${video.authors[0].profile_picture} />
   </div>
   <div>
    <h2 class ="font-bold">${video.title} </h2>
<div class="flex items-center gap-2">
 <div><p class ="text-gray-400">${video.authors[0].profile_name}</p>
 </div>
 <div>
 ${video.authors[0].verified == true ? `<img class="w-5 " src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>` : " "}
   </div>
</div>
    <p><button onclick ="loadDetails('${video.video_id
            }') "  class ="btn btn-sm btn-error">details</button> </p>
   
</div>
  </div>
`; ///*${video.authors[0].verified == true ? "true" : "false"}*/
        videoContainer.append(card);
    })

};

document.getElementById("search-input").addEventListener("keyup",(e)=>{
loadVideos(e.target.value);

});
loadCategories();
loadVideos();