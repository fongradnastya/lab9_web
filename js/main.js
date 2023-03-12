// После загрузки страницы вывести в консоль информацию о всех
// ссылках, якорях, изображениях на странице.

// И изображения, и ссылки
let allLinks = Array.from(document.getElementsByTagName("a"));

let allImages = Array.from(document.getElementsByTagName("img"));

console.log('Links and anchors:')
allLinks.forEach((item, index) => {
    console.log(`Link id: ${index}: <a href=${item.href}>${item.innerText}</a>`);
})

console.log('Images:')
allImages.forEach((item, index) => {
    console.log(`Image id: ${index}: <img src=${item.src} alt=${item.alt}>`);
})

// Обработчики событий

const carouselPrev = document.querySelector('.carousel-control-prev'); // Нельзя лобавить несколько обработчиков
const carouselNext = document.querySelector('.carousel-control-next');
carouselPrev.onclick = () => { console.log("Shown previous page") };
carouselNext.onclick = () => { console.log("Shown next page") };

let limitedImg = document.querySelector('.swap');
limitedImg.onmouseover = () => { console.log("Your mouse is over the picture ") };

let header = document.getElementsByClassName("header__title");
header[0].addEventListener("mousedown", (e) => { console.log(e); }, false);
let logo = document.getElementsByClassName("logo");
logo[0].addEventListener("mouseout", (e) => { console.log(e); }, false);

// Анимация

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

limitedImg.addEventListener("click", swapImages, false)