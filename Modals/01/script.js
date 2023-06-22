const openBtn = document.querySelector("[data-open]");
const closeBtn = document.querySelector("[data-close]");
const modal = document.querySelector("#modal");

// Open the modal when the button is clicked
openBtn.addEventListener("click", () => {
  modal.showModal();
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.close();
});
