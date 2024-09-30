/**
 * This function enables smooth scrolling for all navigation links.
 * When clicked, it smoothly scrolls to the corresponding section.
 */

function smoothScroll() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const navHash = document.querySelector(link.hash);
      navHash.scrollIntoView({ behavior: "smooth" });
    });
  });
}

smoothScroll();
