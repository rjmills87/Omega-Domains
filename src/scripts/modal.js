const legalModal = document.querySelector(".legal-modal");
const modalLink = document.querySelector(".modal-link");
const modalClose = document.querySelector(".close");
const body = document.querySelector("body");

modalLink.addEventListener("click", function () {
  legalModal.style.display = "block";
  body.style.overflow = "hidden";
});

modalClose.addEventListener("click", function () {
  legalModal.style.display = "none";
  body.style.overflow = "auto";
});

window.addEventListener("click", function (e) {
  if (e.target == legalModal) {
    legalModal.style.display = "none";
    body.style.overflow = "auto";
  }
});
