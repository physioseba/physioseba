/* =========================================================
   Physio Seba — Home Physiotherapy in Dhaka
   Vanilla JS — no dependencies
   ========================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    setFooterYear();
    initFaqAccordion();
    initScrollReveal();
    initSmoothScroll();
    initConversionTracking();
  }

  /* Footer year */
  function setFooterYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* FAQ accordion — accessible, single-open */
  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq-item");
    items.forEach(function (item) {
      var btn = item.querySelector(".faq-question");
      var answer = item.querySelector(".faq-answer");
      if (!btn || !answer) return;

      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");

        items.forEach(function (other) {
          other.classList.remove("is-open");
          var otherBtn = other.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* Scroll-triggered reveal animations */
  function initScrollReveal() {
    var revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* Smooth scroll for in-page anchor links (native CSS handles most,
     this adds an offset for the sticky header on larger screens) */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;
        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        var header = document.querySelector(".site-header");
        var headerHeight = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  /* Conversion tracking hooks for Google Ads / GA4.
     Fires a dataLayer event on every call / WhatsApp click so a
     Google Ads conversion action can be attached via GTM. */
  function initConversionTracking() {
    window.dataLayer = window.dataLayer || [];

    var conversionEls = document.querySelectorAll("[data-conversion]");
    conversionEls.forEach(function (el) {
      el.addEventListener("click", function () {
        var type = el.getAttribute("data-conversion");
        window.dataLayer.push({
          event: "physio_seba_conversion",
          conversion_type: type,
          page_path: "/home-physiotherapy-dhaka/"
        });
      });
    });
  }
})();
