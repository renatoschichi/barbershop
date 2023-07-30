const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function setDateAndTime() {
  window.open(
    "https://booksy.com/pt-br/29857_rb-studio-barber_barba_1011594_sao-vicente"
  );
}

function openFacebook() {
  window.open(
    "https://www.facebook.com/rbstudiobarber"
  );
}

function openInstagram() {
  window.open(
    "https://www.instagram.com/rbstudiobarber"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".cards");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const progressBar = document.querySelector(".progress-bar");

  const cardWidth = document.querySelector(".card").offsetWidth;
  const totalCards = document.querySelectorAll(".card").length;
  const carouselWidth = cardWidth * totalCards;
  let currentPosition = 0;

  carousel.style.width = carouselWidth + "px";

  function updateProgressBar() {
    const progress = (currentPosition / (totalCards - 1)) * 100;
    progressBar.style.transform = `scaleX(${progress / 100})`;
  }

  function moveToCard(cardIndex) {
    currentPosition = cardIndex;
    const offset = -currentPosition * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    updateProgressBar();
  }

  prevBtn.addEventListener("click", function () {
    if (currentPosition > 0) {
      currentPosition--;
      moveToCard(currentPosition);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentPosition < totalCards - 1) {
      currentPosition++;
      moveToCard(currentPosition);
    }
  });
});
