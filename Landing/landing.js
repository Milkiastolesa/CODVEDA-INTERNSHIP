
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});


document.getElementById("ctaBtn").addEventListener("click", () => {
  alert("Get Started!");
});



/// tebeda beka


const features = document.querySelectorAll(".feature");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight * 0.85;

  features.forEach(feature => {
    const top = feature.getBoundingClientRect().top;
    if (top < triggerPoint) {
      feature.classList.add("show");
    }
  });
});
