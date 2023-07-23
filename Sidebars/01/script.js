const menu = document.querySelector("#menu");
const menuBtns = document.querySelectorAll(".menu-btn");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    menu.classList.toggle("visible");
  });
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !menuBtns[0].contains(e.target)) {
    menu.classList.remove("visible");
  }
});
