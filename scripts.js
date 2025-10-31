// ===============================
// Smooth Scroll Effect
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }

    // Close menu after clicking (for mobile)
    const menu = document.querySelector(".menu");
    const hamburger = document.getElementById("hamburger");
    menu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

// ===============================
// Highlight Active Menu on Scroll
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-list a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Hamburger Menu Toggle
// ===============================
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
});
