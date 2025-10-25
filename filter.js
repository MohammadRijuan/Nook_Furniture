const filterButtons = document.querySelectorAll(".filter-btns button");
const filterableCards = document.querySelectorAll(".filterable-cards .cards");


const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide")

        if(card.dataset.name === e.target.dataset.name){
            card.classList.remove("hide")
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click",filterCards))
console.log(filterCards)