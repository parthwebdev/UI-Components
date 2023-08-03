const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ duration: 0.8, ease: "power3.out" });

function openMenu() {
  menu.classList.toggle("active");
  document.body.classList.toggle("sidebar-open");

  tl.to(menu, {
    x: menu.classList.contains("active") ? "0" : "100%",
  });

  gsap.fromTo(
    menuItems,
    {
      x: 150,
    },
    {
      x: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: "power4.out",
    }
  );
}

gsap.to(menuBtn, {
  scrollTrigger: {
    trigger: document.documentElement,
    start: 0,
    end: window.innerHeight,
    onLeave: () => {
      gsap.to(menuBtn, { scale: 1 });
    },
    onEnterBack: () => {
      gsap.to(menuBtn, { scale: 0 });
    },
  },
  duration: 0.25,
  ease: "power3.out",
});

menuBtn.addEventListener("click", openMenu);
