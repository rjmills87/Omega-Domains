const domainNamesBtn = document.querySelector(".header-link-1");
const websitesAndHostingBtn = document.querySelector(".header-link-2");
const emailAndMarketingBtn = document.querySelector(".header-link-3");

const domainNamesMegaMenu = document.querySelector(".mega-menu-1");
const websitesAndHostingMegaMenu = document.querySelector(".mega-menu-2");
const emailAndMarketingMegaMenu = document.querySelector(".mega-menu-3");

domainNamesBtn.addEventListener("click", function () {
  domainNamesMegaMenu.style.display = "block";
  websitesAndHostingMegaMenu.style.display = "none";
  emailAndMarketingMegaMenu.style.display = "none";
});

websitesAndHostingBtn.addEventListener("click", function () {
  websitesAndHostingMegaMenu.style.display = "block";
  domainNamesMegaMenu.style.display = "none";
  emailAndMarketingMegaMenu.style.display = "none";
});

emailAndMarketingBtn.addEventListener("click", function () {
  emailAndMarketingMegaMenu.style.display = "block";
  domainNamesMegaMenu.style.display = "none";
  websitesAndHostingMegaMenu.style.display = "none";
});
