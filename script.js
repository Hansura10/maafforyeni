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

// Tambahkan ini di atas fungsi startTransition
const music = new Audio('assets/musik.mp3');
music.loop = true;

function startTransition() {
  // Mulai musik setelah interaksi user
  music.play().catch((e) => {
    console.warn("Autoplay ditolak, akan coba lagi setelah hitung mundur");
  });

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

      // Coba putar ulang musik kalau sebelumnya gagal
      music.play().catch((e) => {
        console.warn("Musik tetap gagal diputar:", e);
      });
    } else {
      counter.innerText = count;
    }
  }, 1000);
}
