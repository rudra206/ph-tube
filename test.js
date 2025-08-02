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

function getTimeString(time){
    //get hour and rest seconds
const day = parseInt (time / 86400);
let remainingSecond1 = time % 86400;
const hour =parseInt (remainingSecond1 / 3600);
let remainingSecond2 = remainingSecond1 % 3600;
let minute =parseInt(remainingSecond2 / 60);
const second = remainingSecond2 % 60;
return `${day} day ${hour} hour  ${minute} minutes  ${second} second ago`
}
console.log(getTimeString(7865));