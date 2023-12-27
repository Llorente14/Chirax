const mainMenu = document.querySelector(".mainMenu");

const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = 0;
}
