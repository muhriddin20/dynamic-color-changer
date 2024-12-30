const screen = document.querySelector(".screen");
const input = document.querySelector(".container input");

input.addEventListener("input", (e) => {
  screen.style.background = e.target.value;
});
