const button = document.querySelector(".btn");
const inner = document.querySelector(".inner");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  button.style.setProperty("--mouseX", `${x}px`);
  button.style.setProperty("--mouseY", `${y}px`);
});
