document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Logic
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-links a");

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "auto";
  };

  hamburger.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Subtle Reveal on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  // Header Scroll Padding
  const nav = document.querySelector(".navbar-ultra-sleek");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.padding = "1rem 0";
      nav.style.background = "rgba(0,0,0,0.9)";
      nav.style.backdropFilter = "blur(15px)";
    } else {
      nav.style.padding = "1.5rem 0";
      nav.style.background = "transparent";
      nav.style.backdropFilter = "none";
    }
  });
});
