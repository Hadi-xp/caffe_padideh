// selecting icons for opening and closing menu
// sandwitch icon



let previusBox

const sandwitchIcon = document.querySelector(".sandwichIcon");
const sandwitchBox = document.querySelector(".sandwich-box");
sandwitchIcon.addEventListener("click", () => {
    if (previusBox) {
        previusBox.style.display = "none";
    }
    sandwitchBox.style.display = "block";
    previusBox = sandwitchBox;
})

const pizzaIcon = document.querySelector(".americanPizza");
const pizzaBox = document.querySelector(".pizzaBox");
pizzaIcon.addEventListener("click", () => {
    if (previusBox) {
        previusBox.style.display = "none";
    }
    pizzaBox.style.display = "block";
    previusBox = pizzaBox;
})




