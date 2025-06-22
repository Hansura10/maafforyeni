const introBtn = document.getElementById("introBtn");
const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const countdownNumber = document.getElementById("countdown-number");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");

let carouselImages = [
  "assets/carousel1.jpg",
  "assets/carousel2.jpg",
  "assets/carousel3.jpg"
];
let currentSlide = 0;
const carouselImg = document.getElementById("carousel-image");

function showSlide(index) {
  if (index < 0) index = carouselImages.length - 1;
  if (index >= carouselImages.length) index = 0;
  currentSlide = index;
  carouselImg.src = carouselImages[currentSlide];
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

introBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  countdown.classList.remove("hidden");

  let count = 5;
  const interval = setInterval(() => {
    count--;
    countdownNumber.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      countdown.classList.add("hidden");
      mainContent.classList.remove("hidden");
      showSlide(0);
      setTimeout(() => {
        music.play().catch((e) => {
          console.warn("Musik gagal diputar:", e);
        });
      }, 300);
    }
  }, 1000);
});