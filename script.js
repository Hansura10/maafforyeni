
function startTransition() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("countdown").classList.remove("hidden");

  let count = 5;
  const counter = document.getElementById("count");

  const interval = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(interval);
      document.getElementById("countdown").classList.add("hidden");
      document.getElementById("main").classList.remove("hidden");

      // Mainkan musik setelah halaman utama tampil
      setTimeout(() => {
        const music = new Audio("assets/musik.mp3");
        music.loop = true;
        music.play().catch((e) => {
          console.warn("Musik gagal diputar:", e);
        });
      }, 300);
    } else {
      counter.innerText = count;
    }
  }, 1000);
}
