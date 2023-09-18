const menuBtn = document.querySelector(".menu-btn");
const wrapper = document.querySelector(".wrapper");

menuBtn.addEventListener("click", function () {
  menuBtn.querySelector("i").classList.toggle("fa-xmark");

  wrapper.classList.toggle("open");
});
