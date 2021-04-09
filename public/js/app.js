let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let warningMessage = document.querySelector(".warning-message");
let input = document.getElementById("fullUrl");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

input.addEventListener("focusout", () => {
  if (input.value === "") {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
});

//scroll reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: "1000",
  distance: "25rem",
  delay: 500,
  reset: true,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: "1000",
  distance: "25rem",
  delay: 600,
  reset: true,
});
