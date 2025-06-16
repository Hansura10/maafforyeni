const introBtn = document.getElementById("introBtn");
const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const countdownNumber = document.getElementById("countdown-number");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");

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

      setTimeout(() => {
        music.play().catch((e) => {
          console.warn("Musik gagal diputar:", e);
        });
      }, 300);
    }
  }, 1000);
});