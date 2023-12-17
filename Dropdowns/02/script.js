const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", () => {
  const dropdownMenu = document.querySelector("#dropdown > .menu");

  dropdownMenu.classList.toggle("open");
  dropdownToggle.classList.toggle("open");
});
