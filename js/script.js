const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const surpriseBtn = document.getElementById("surprise-btn");
const surpriseText = document.getElementById("surprise-text");

if (surpriseBtn && surpriseText) {
  surpriseBtn.addEventListener("click", () => {
    surpriseText.classList.toggle("show");
  });
}