const domainNamesBtn = document.querySelector(".header-link-1");
const websitesAndHostingBtn = document.querySelector(".header-link-2");
const emailAndMarketingBtn = document.querySelector(".header-link-3");

const domainNamesMegaMenu = document.getElementById("mega-menu-1");
const websitesAndHostingMegaMenu = document.getElementById("mega-menu-2");
const emailAndMarketingMegaMenu = document.getElementById("mega-menu-3");

domainNamesBtn.addEventListener("click", () => {
  domainNamesMegaMenu.classList.toggle("active");
  websitesAndHostingMegaMenu.classList.remove("active");
  emailAndMarketingMegaMenu.classList.remove("active");
});

websitesAndHostingBtn.addEventListener("click", () => {
  websitesAndHostingMegaMenu.classList.toggle("active");
  domainNamesMegaMenu.classList.remove("active");
  emailAndMarketingMegaMenu.classList.remove("active");
});

emailAndMarketingBtn.addEventListener("click", () => {
  emailAndMarketingMegaMenu.classList.toggle("active");
  domainNamesMegaMenu.classList.remove("active");
  websitesAndHostingMegaMenu.classList.remove("active");
});

window.addEventListener("scroll", () => {
  domainNamesMegaMenu.classList.remove("active");
  websitesAndHostingMegaMenu.classList.remove("active");
  emailAndMarketingMegaMenu.classList.remove("active");
});
