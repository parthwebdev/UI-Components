const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  cursor.animate(
    {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("expand");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
});
