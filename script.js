// Elemen-elemen utama
const introBtn = document.getElementById("introBtn");
const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const countdownNumber = document.getElementById("countdown-number");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");

// Carousel (versi geser)
const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-img");
let currentIndex = 0;

// Geser ke slide saat ini
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Tombol panah (desktop)
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

// Swipe gesture (mobile)
let startX = 0;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) {
    nextSlide();
  } else if (endX > startX + 50) {
    prevSlide();
  }
});

// Transisi dari intro ke countdown
introBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  countdown.classList.remove("hidden");

  let count = 5;
  countdownNumber.textContent = count;

  const interval = setInterval(() => {
    count--;
    countdownNumber.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      countdown.classList.add("hidden");
      mainContent.classList.remove("hidden");
      updateCarousel(); // tampilkan slide pertama
      setTimeout(() => {
        music.play().catch((e) => {
          console.warn("Musik gagal diputar:", e);
        });
      }, 300);
    }
  }, 1000);
});
