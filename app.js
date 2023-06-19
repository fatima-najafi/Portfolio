const displayNav = document.getElementById("show-nav");
const hideNav = document.getElementById("hide-nav");
const mobileMenuLinks = document.getElementById("mobile-menu-links");
const mobileMenu = document.getElementById("mobile-menu");

displayNav.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--show");
});

hideNav.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--show");
});

mobileMenuLinks.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--show");
});
