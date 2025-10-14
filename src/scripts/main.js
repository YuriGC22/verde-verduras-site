"use strict";

(function () {
  const SELECTORS = {
    navToggle: ".nav-toggle",
    mobileMenu: "#mobile-menu",
    header: ".site-header",
    faqItem: ".faq-item",
  };

  const analytics = {
    track(eventName, element) {
      if (!eventName) {
        return;
      }

      const section =
        element.closest("[data-analytics-section]")?.dataset.analyticsSection ??
        null;
      const context = element.dataset.analyticsContext ?? null;
      const payload = {
        event: eventName,
        context,
        section,
        timestamp: new Date().toISOString(),
      };

      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
      } else {
        console.info("[analytics]", payload);
      }
    },
  };

  window.verdeAnalytics = analytics;

  function setupAnalyticsListeners() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest("[data-analytics]");
      if (!target) {
        return;
      }

      const eventName = target.dataset.analytics;
      analytics.track(eventName, target);
    });
  }

  function setupHeaderScroll() {
    const header = document.querySelector(SELECTORS.header);
    if (!header) {
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 8;
      header.classList.toggle("is-scrolled", scrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  function setupMobileNav() {
    const toggle = document.querySelector(SELECTORS.navToggle);
    const menu = document.querySelector(SELECTORS.mobileMenu);

    if (!toggle || !menu) {
      return;
    }

    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
    };

    const openMenu = () => {
      toggle.setAttribute("aria-expanded", "true");
      menu.classList.add("open");
    };

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 768) {
          closeMenu();
        }
      },
      { passive: true }
    );
  }

  function setupFaqAccordion() {
    const faqItems = Array.from(document.querySelectorAll(SELECTORS.faqItem));
    if (!faqItems.length) {
      return;
    }

    const setOpenState = (item, open) => {
      item.classList.toggle("open", open);
      const question = item.querySelector(".faq-question");
      if (question) {
        question.setAttribute("aria-expanded", String(open));
      }
    };

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      if (!question) {
        return;
      }

      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        faqItems.forEach((faq) => {
          if (faq !== item) {
            setOpenState(faq, false);
          }
        });

        setOpenState(item, !isOpen);

        const contextText = question.textContent?.trim().slice(0, 40) ?? "faq";
        const contextSlug = contextText
          .toLowerCase()
          .replace(/[^\w]+/g, "_")
          .replace(/^_+|_+$/g, "");
        question.dataset.analyticsContext = `faq_${contextSlug || "item"}`;
        analytics.track("faq_toggle", question);
      });
    });
  }

  function init() {
    setupAnalyticsListeners();
    setupHeaderScroll();
    setupMobileNav();
    setupFaqAccordion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
