// Tambahkan animasi transisi dari intro ke countdown lalu ke halaman utama
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
    } else {
      counter.innerText = count;
    }
  }, 1000);
}

const music = new Audio('assets/musik.mp3');
music.loop = true;

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

      // Mulai musik hanya di halaman utama
      music.play().catch((e) => {
        console.warn("Musik gagal diputar:", e);
      });
    } else {
      counter.innerText = count;
    }
  }, 1000);
}

