const filterButtons = document.querySelectorAll(".filter-btns button");
const filterableCards = document.querySelectorAll(".filterable-cards .cards");
const seeAllBtn = document.querySelector(".see-all-btn");
const cardsContainer = document.querySelector(".filterable-cards");

let isFiltered = false;
let activeCategory = "Sofa";

const showDefaultCards = () => {

  filterableCards.forEach((card, index) => {
    card.style.display = index < 8 ? "block" : "none";
    card.classList.remove("hide");
  });
};


showDefaultCards();


const filterCards = (e) => {
  document.querySelector(".filter-btns .active").classList.remove("active");
  e.target.classList.add("active");

  activeCategory = e.target.dataset.name;
  isFiltered = true;


  cardsContainer.classList.remove("show-all");
  seeAllBtn.innerHTML = `See All Collection <img src="./asset/Frame (3).png" alt="">`;

  filterableCards.forEach((card) => {
    if (card.dataset.name === activeCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};


filterButtons.forEach((button) => button.addEventListener("click", filterCards));

seeAllBtn.addEventListener("click", () => {
  const showingAll = cardsContainer.classList.toggle("show-all");

  if (showingAll) {
    // Show all cards
    filterableCards.forEach((card) => (card.style.display = "block"));
    seeAllBtn.innerHTML = `Hide Collection <img src="./asset/Frame (3).png" alt="">`;
  } else {

    if (isFiltered) {
      filterableCards.forEach((card) => {
        if (card.dataset.name === activeCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    } else {
      showDefaultCards();
    }
    seeAllBtn.innerHTML = `See All Collection <img src="./asset/Frame (3).png" alt="">`;
  }
});
