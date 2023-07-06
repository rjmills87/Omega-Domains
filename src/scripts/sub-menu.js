const dnContainer = document.querySelector(".dn-container");
const whContainer = document.querySelector(".wh-container");
const emContainer = document.querySelector(".em-container");
const subMenuContent = document.querySelector(".wrapper");
const dnCloseBtn = document.querySelector(".dn-close");
const whCloseBtn = document.querySelector(".wh-close");
const emCloseBtn = document.querySelector(".em-close");
const openDomainNames = document.querySelector(".dn-open");
const openWebAndHosting = document.querySelector(".wh-open");
const openEmailAndMarketing = document.querySelector(".em-open");

openDomainNames.addEventListener("click", () => {
  dnContainer.classList.add("active");
});

openWebAndHosting.addEventListener("click", () => {
  whContainer.classList.add("active");
});

openEmailAndMarketing.addEventListener("click", () => {
  emContainer.classList.add("active");
});

dnCloseBtn.addEventListener("click", () => {
  dnContainer.classList.remove("active");
});

whCloseBtn.addEventListener("click", () => {
  whContainer.classList.remove("active");
});

emCloseBtn.addEventListener("click", () => {
  emContainer.classList.remove("active");
});
