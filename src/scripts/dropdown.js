const domainNamesBtn = document.querySelector(".header-link-1");
const websitesAndHostingBtn = document.querySelector(".header-link-2");
const emailAndMarketingBtn = document.querySelector(".header-link-3");

const domainNamesMegaMenu = document.querySelector(".mega-menu-1");
const websitesAndHostingMegaMenu = document.querySelector(".mega-menu-2");
const emailAndMarketingMegaMenu = document.querySelector(".mega-menu-3");

domainNamesBtn.addEventListener("click", function () {
  domainNamesMegaMenu.classList.toggle("active");
});

websitesAndHostingBtn.addEventListener("click", function () {
  websitesAndHostingMegaMenu.classList.toggle("active");
});

emailAndMarketingBtn.addEventListener("click", function () {
  emailAndMarketingMegaMenu.classList.toggle("active");
});
