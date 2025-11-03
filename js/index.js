// ===================== CARROUSEL =====================
const carousel = document.getElementById("carousel");
if (carousel) {
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
}

// ===================== RECHERCHE ARTICLES =====================
const articleSearch = document.querySelector("input[placeholder*='article']");
const articles = document.querySelectorAll("article");

if (articleSearch && articles.length > 0) {
  articleSearch.addEventListener("input", () => {
    const value = articleSearch.value.toLowerCase().trim();

    articles.forEach(article => {
      const title = article.querySelector("h3").textContent.toLowerCase();
      const text = article.querySelector("p").textContent.toLowerCase();
      article.style.display =
        title.includes(value) || text.includes(value) ? "block" : "none";
    });
  });
}

// ===================== RECHERCHE MÉDECINS =====================
const doctorSearch = document.querySelector("input[placeholder*='médecin']");
const doctors = document.querySelectorAll(".grid > div");

if (doctorSearch && doctors.length > 0) {
  doctorSearch.addEventListener("input", () => {
    const value = doctorSearch.value.toLowerCase().trim();

    doctors.forEach(doctor => {
      const name = doctor.querySelector("h3").textContent.toLowerCase();
      const specialty = doctor.querySelectorAll("p")[0].textContent.toLowerCase();

      doctor.style.display =
        name.includes(value) || specialty.includes(value) ? "block" : "none";
    });
  });
}

// ===================== MENU BURGER =====================
const burger = document.getElementById("burger");
const menuMobile = document.getElementById("menuMobile");

if (burger && menuMobile) {
  burger.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
    menuMobile.classList.toggle("flex");
  });
}


