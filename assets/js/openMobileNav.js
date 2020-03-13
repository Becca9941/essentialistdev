function openMobileNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const mainContent = document.getElementById("main-content");
  mobileNav.classList.toggle("open");
  mainContent.classList.toggle("open");
}
