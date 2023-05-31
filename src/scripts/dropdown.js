const domainNamesBtn = document.querySelector(".header-link-1");
const websitesAndHostingBtn = document.querySelector(".header-link-2");
const emailAndMarketingBtn = document.querySelector(".header-link-3");
const contactBtn = document.querySelector(".contact-link");

const domainNamesMegaMenu = document.getElementById("mega-menu-1");
const websitesAndHostingMegaMenu = document.getElementById("mega-menu-2");
const emailAndMarketingMegaMenu = document.getElementById("mega-menu-3");
const contactMegaMenu = document.getElementById("contact-menu");

domainNamesBtn.addEventListener("click", () => {
  domainNamesMegaMenu.classList.toggle("active");
  websitesAndHostingMegaMenu.classList.remove("active");
  emailAndMarketingMegaMenu.classList.remove("active");
  contactMegaMenu.classList.remove("active");
});

websitesAndHostingBtn.addEventListener("click", () => {
  websitesAndHostingMegaMenu.classList.toggle("active");
  domainNamesMegaMenu.classList.remove("active");
  emailAndMarketingMegaMenu.classList.remove("active");
  contactMegaMenu.classList.remove("active");
});

emailAndMarketingBtn.addEventListener("click", () => {
  emailAndMarketingMegaMenu.classList.toggle("active");
  domainNamesMegaMenu.classList.remove("active");
  websitesAndHostingMegaMenu.classList.remove("active");
  contactMegaMenu.classList.remove("active");
});

contactBtn.addEventListener("click", () => {
  contactMegaMenu.classList.toggle("active");
  domainNamesMegaMenu.classList.remove("active");
  websitesAndHostingMegaMenu.classList.remove("active");
  emailAndMarketingMegaMenu.classList.remove("active");
});

window.addEventListener("scroll", () => {
  domainNamesMegaMenu.classList.remove("active");
  websitesAndHostingMegaMenu.classList.remove("active");
  emailAndMarketingMegaMenu.classList.remove("active");
  contactMegaMenu.classList.remove("active");
});
