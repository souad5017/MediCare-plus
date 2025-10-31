
const carousel = document.getElementById("carousel");
let scrollAmount = 0;
const cardWidth = carousel.firstElementChild.offsetWidth + 16;
const scrollStep = cardWidth;
const delay = 3000; 

function autoScroll() {
  if (scrollAmount + carousel.clientWidth >= carousel.scrollWidth) {

    scrollAmount = 0;
  } else {
    scrollAmount += scrollStep;
  }

  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

let autoPlay = setInterval(autoScroll, delay);
carousel.addEventListener("mouseenter", () => clearInterval(autoPlay));
carousel.addEventListener("mouseleave", () => {
  autoPlay = setInterval(autoScroll, delay);
});
