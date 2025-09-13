let cards = document.querySelectorAll(".card");
cards.forEach(card =>{
    let btn =card.querySelector("#view");
    let backSide = card.querySelector(".back");
    btn.addEventListener("click",() =>{
        card.classList.add(".flipped");
    });
        backSide.addEventListener("click",() =>{
            card.classList.remove(".flipped");
    });
});