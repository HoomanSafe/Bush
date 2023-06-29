const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".header");
const loader = document.querySelector("#loader");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  header.classList.toggle("open");
});

window.addEventListener("load", () => {
  loader.classList.add("load");

  setTimeout(() => {
    loader.classList.add("d-none");
  }, 500);
});
