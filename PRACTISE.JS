// document.addEventListener("DOMContentLoaded", function () {
// let btn = document.querySelector("button");

// console.dir(btn);

// btn.onclick = function () {
//   alert("Button was clicked");
// };


// let btns=document.querySelectorAll("button");
// for (btn of btns){
//     btn.onclick=function(){alert('Button was clicked')};
//     btn.onmouseenter = function(){
//         alert("mat krna dubara")
//     }
// }

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    // console.log("generate random color");
    let h3 = document.querySelector("h3");
    let color = getColor();
    h3.innerText = color; 

    let div = document.querySelector("div");
    div.style.backgroundColor = color;

    console.log("color updated");
});


function getColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `RGB(${red}, ${green}, ${blue})`;
    return color;
}

