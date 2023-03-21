const basketPrise = document.querySelector(".price");
const headerPrice = document.querySelector(".header__prise");
const deleteItems = document.querySelectorAll(".trash");
const counters = document.getElementsByClassName("counter");

deleteItems.forEach((item)=>{
    item.addEventListener("click", function (event){
        const card = event.target.closest(".card");
        card.parentNode.removeChild(card);
        setPrice();
    });
})

let commonPrice = 0;

function checkIsEmpty(){
    if(counters.length == 0){
        const commonPrice = document.querySelector(".common-price");
        const message = document.querySelector(".warning");
        commonPrice.style.display = "none";
        message.style.display = "block";
        addCard();
    }
}

function addCard(){
    const newCard = document.createElement("div");
    newCard.classList = "card md-3 empty";
    newCard.innerHTML = "<div class='empty_basket'><img src='img/form/basket.png' class='img-fluid rounded-start pr' alt=''></div>"
    const cardParent = document.querySelector('.products-group');
    cardParent.appendChild(newCard);
    console.log(newCard);
}

function setPrice(){
    commonPrice = 0;
    Array.prototype.forEach.call(counters, function(item){
        let quantity = item.value;
        const card = item.closest(".card");
        const itemPriceTag = card.querySelector(".card-price");
        let itemPrice = Number(itemPriceTag.textContent.trim().slice(0, -3));
        commonPrice += quantity * itemPrice;
        
    });
    basketPrise.textContent = commonPrice + " р.";
    headerPrice.textContent = commonPrice + " р.";
    checkIsEmpty();
}

Array.prototype.forEach.call(counters, function(item){
    item.addEventListener("input", ()=>{
        setPrice();
    })
});

setPrice();