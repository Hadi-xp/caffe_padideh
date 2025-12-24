// selecting icons for opening and closing menu
let previusBox
// sandwitch
const sandwitchIcon = document.querySelector(".sandwichIcon");
const sandwitchBox = document.querySelector(".sandwich-box");
sandwitchIcon.addEventListener("click", () => {
    if (previusBox) {
        previusBox.style.display = "none";
    }
    sandwitchBox.style.display = "block";
    previusBox = sandwitchBox;
})
// pizza
const pizzaIcon = document.querySelector(".americanPizza");
const pizzaBox = document.querySelector(".pizzaBox");
pizzaIcon.addEventListener("click", () => {
    if (previusBox) {
        previusBox.style.display = "none";
    }
    pizzaBox.style.display = "block";
    previusBox = pizzaBox;
})
// pasta
const pastaIcon = document.querySelector('.pasta');
const pastaBox = document.querySelector('.pastaBox');
pastaIcon.addEventListener("click",()=>{
    if(previusBox){
        previusBox.style.display = "none";
    }
    pastaBox.style.display = "block";
    previusBox = pastaBox;
})
// glasse
const glasseIcon = document.querySelector('.gelasse');
const glasseBox = document.querySelector('.galsse-box');
glasseBox.addEventListener("click",()=>{
    if()
})









