const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik luar slidebar buat ilangin menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const text1 = document.querySelector(".subtitleEvent2");

const textLoad = () => {
  setTimeout(() => {
    text1.textContent = "Chirgia Arundati Sulaksono";
  }, 0);
  setTimeout(() => {
    text1.textContent = "Sayangku";
  }, 4000);
  setTimeout(() => {
    text1.textContent = "Pacarnya Axel!";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.getElementById("popup-1").classList.toggle("active");
  }
});
