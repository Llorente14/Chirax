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
document.querySelectorAll(".rakFoto img").forEach((Image) => {
  Image.onclick = () => {
    document.querySelector(".popImg").style.display = "block";
    document.querySelector(".popImg img").src = Image.getAttribute("src");
  };
});

document.querySelector(".popImg span").onclick = () => {
  document.querySelector(".popImg").style.display = "none";
};
