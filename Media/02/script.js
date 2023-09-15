const tiles = document.querySelector(".tiles");
let toggled = false;

const createTile = (index) => {
  const tileEl = document.createElement("div");
  tileEl.classList.add("tile");

  tileEl.addEventListener("click", () => effect(index));

  return tileEl;
};

const createGrid = () => {
  window.innerHTML = "";

  const size = document.body.clientWidth > 800 ? 100 : 50;
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);

  const numberOfTiles = columns * rows;

  Array.from(Array(numberOfTiles)).map((tile, index) => {
    tiles.style.setProperty("--columns", columns);
    tiles.style.setProperty("--rows", rows);

    tiles.appendChild(createTile(index));
  });
};

const effect = (index) => {
  toggled = !toggled;

  const grid = anime({
    duration: 1000,
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });

  const title = anime({
    duration: 5000,
    targets: ".title",
    opacity: toggled ? 0 : 1,
  });
};

createGrid();
window.addEventListener("resize", createGrid);
