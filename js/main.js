// Анимация
let limitedImg = document.querySelector('.swap');
let index = 0;
let imgs = Array("img/limited-edition/photo1.png", "img/limited-edition/photo2.png",
    "img/limited-edition/photo3.png");


function swapImages() {
    if (index + 1 != imgs.length) {
        index++;
        limitedImg.src = imgs[index];
    }
    else {
        index = 0;
        limitedImg.src = imgs[index];
    }
}

limitedImg.addEventListener("click", swapImages, false);


// Работа с корзиной

const basketPrise = document.querySelector(".header__prise");
const productsAdd = document.querySelectorAll(".popular__link");
console.log(basketPrise.textContent);
basketPrise.textContent = 0 + " р.";

let commonPrice = 0;

productsAdd.forEach((item)=>{
    item.addEventListener("click", function (event) {
        const card = event.target.closest(".popular__card");
        const productPrice = card.querySelector(".popular__price");
        let price = Number(productPrice.textContent.trim().slice(0, -3));
        commonPrice += price;
        basketPrise.textContent = commonPrice + " р.";
        console.log(price);
    })
})

