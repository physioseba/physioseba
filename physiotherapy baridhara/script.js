/* ======================================
   Physio Seba - Baridhara Landing Page
====================================== */

document.addEventListener("DOMContentLoaded", function () {

  // Current Year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });
  });

  // FAQ Accordion
  document.querySelectorAll(".faq-item").forEach(item => {

    const answer = item.querySelector("p");

    if (answer) {
      answer.style.display = "none";
    }

    item.addEventListener("click", () => {

      document.querySelectorAll(".faq-item p").forEach(p => {

        if (p !== answer) {
          p.style.display = "none";
        }

      });

      if (!answer) return;

      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }

    });

  });

  // Reveal Animation
  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  }, {
    threshold: 0.15
  });

  document.querySelectorAll(
    ".service-card,.why-card,.testimonial-card,.process-card,.faq-item"
  ).forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

});

// Sticky Header Shadow
window.addEventListener("scroll", function () {

  const header = document.querySelector(".header");

  if (!header) return;

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 6px 20px rgba(0,0,0,.12)";
  } else {
    header.style.boxShadow = "0 2px 12px rgba(0,0,0,.08)";
  }

});


