let menuBtn = document.getElementById("menu-btn");
let navBar = document.getElementById("mobile-navlist");
let navLinksH = document.getElementById("navlinks-home");
let navLinksS = document.getElementById("navlinks-services");
let navLinksA = document.getElementById("navlinks-about");
let navLinksP = document.getElementById("navlinks-portfolio");
let navLinksC = document.getElementById("navlinks-contact");

function Display() {
  navBar.style.display = "flex";
}

function Hide() {
  navBar.style.display = "none";
  console.log("button clicked");
}

menuBtn.addEventListener("click", Display);

navLinksH.addEventListener("click", Hide);
navLinksS.addEventListener("click", Hide);
navLinksA.addEventListener("click", Hide);
navLinksP.addEventListener("click", Hide);
navLinksC.addEventListener("click", Hide);
