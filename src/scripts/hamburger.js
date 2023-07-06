const mobileMenu = document.querySelector(".menu-container");
const menuToggle = document.getElementById("hamburger");
const mobMenuLogo = document.querySelector(".mob-menu-logo");
const body = document.querySelector("body");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");

  if (
    mobileMenu.classList.contains("active") &&
    menuToggle.classList.contains("open")
  ) {
    body.style.overflow = "hidden";
    body.addEventListener("touchmove", preventScroll);
  } else {
    body.style.overflow = "auto";
    body.removeEventListener("touchmove", preventScroll);
  }
});

mobMenuLogo.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuToggle.classList.remove("open");
  body.style.overflow = "auto";
  body.removeEventListener("touchmove", preventScroll);
});

function preventScroll(event) {
  event.preventDefault();
}
