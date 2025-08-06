// const isVerified = true;
// // if( isVerified === true){
// // console.log("user is verified");

// // } else{
// //    console.log("user is not verified");

// // }

// console.log(
//     `${isVerified === true ? "user is verified" :"user is not verified"}`
// );

// function getTimeString(time){
//     //get hour and rest seconds
// const hour =parseInt (time/3600);
// let remainingSecond = time % 3600;
// const minute =parseInt(remainingSecond/60);
// const second = remainingSecond % 60;


// return ` ${hour} hour  ${minute} minutes  ${second} second ago`
// }
// console.log(getTimeString(6325474));

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
console.log(getTimeString(7865));



/*<div class="px-0 py-2 flex gap-2">
    <div>
        <img class="h-10 w-10 rounded-full object-cover"
            src=${video.authors[0].profile_picture} />
    </div>
    <div>
        <h2 class="font-bold">${video.title} </h2>
        <div class="flex items-center gap-2">
            <p class="text-gray-400">${video.authors[0].profile_name}</p>

            ${video.authors[0].verified == true ? `<img class="w-5 " src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>
`: " "}
        </div>
        <div>
            <p><button onclick="loadDetails('${video.video_id
}') "  class="btn btn-sm btn-error">details</button> </p>
        </div>
    </div>
</div>*/