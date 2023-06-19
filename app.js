const displayNav = document.getElementById("show-nav");
const hideNav = document.getElementById("hide-nav");
const mobileMenuLinks = document.getElementById("mobile-menu-links  a");
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
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetID = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: "smooth" });
    mobileMenu.classList.remove("mobile-menu--show");
  });
});
