const menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("open");
});
