class GhlamHeroSlider {
  constructor(section) {
    this.section = section;
    this.slides = [...section.querySelectorAll("[data-ghlam-slide]")];
    this.dots = [...section.querySelectorAll("[data-ghlam-dot]")];
    this.previousButton = section.querySelector("[data-ghlam-previous]");
    this.nextButton = section.querySelector("[data-ghlam-next]");

    this.currentIndex = 0;
    this.autoplayEnabled = section.dataset.autoplay === "true";
    this.autoplaySpeed = Number(section.dataset.speed) || 6000;
    this.timer = null;
    this.touchStartX = 0;
    this.touchEndX = 0;

    if (this.slides.length <= 1) return;

    this.bindEvents();
    this.startAutoplay();
    this.updateVideos();
  }

  bindEvents() {
    this.previousButton?.addEventListener("click", () => {
      this.goTo(this.currentIndex - 1);
    });

    this.nextButton?.addEventListener("click", () => {
      this.goTo(this.currentIndex + 1);
    });

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goTo(index));
    });

    this.section.addEventListener("mouseenter", () => this.stopAutoplay());
    this.section.addEventListener("mouseleave", () => this.startAutoplay());

    this.section.addEventListener(
      "touchstart",
      (event) => {
        this.touchStartX = event.changedTouches[0].screenX;
        this.stopAutoplay();
      },
      { passive: true },
    );

    this.section.addEventListener(
      "touchend",
      (event) => {
        this.touchEndX = event.changedTouches[0].screenX;
        this.handleSwipe();
        this.startAutoplay();
      },
      { passive: true },
    );

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stopAutoplay();
      } else {
        this.startAutoplay();
      }
    });
  }

  goTo(index) {
    const slideCount = this.slides.length;

    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;

    this.slides[this.currentIndex]?.classList.remove("is-active");

    this.dots[this.currentIndex]?.classList.remove("is-active");
    this.dots[this.currentIndex]?.setAttribute("aria-current", "false");

    this.currentIndex = index;

    this.slides[this.currentIndex]?.classList.add("is-active");

    this.dots[this.currentIndex]?.classList.add("is-active");
    this.dots[this.currentIndex]?.setAttribute("aria-current", "true");

    this.updateVideos();
    this.restartAutoplay();
  }

  handleSwipe() {
    const distance = this.touchStartX - this.touchEndX;

    if (Math.abs(distance) < 45) return;

    if (distance > 0) {
      this.goTo(this.currentIndex + 1);
    } else {
      this.goTo(this.currentIndex - 1);
    }
  }

  updateVideos() {
    this.slides.forEach((slide, index) => {
      const videos = slide.querySelectorAll("video");

      videos.forEach((video) => {
        if (index === this.currentIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    });
  }

  startAutoplay() {
    if (!this.autoplayEnabled || this.slides.length <= 1 || this.timer) return;

    this.timer = window.setInterval(() => {
      this.goTo(this.currentIndex + 1);
    }, this.autoplaySpeed);
  }

  stopAutoplay() {
    if (!this.timer) return;

    window.clearInterval(this.timer);
    this.timer = null;
  }

  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

function initializeGhlamHeroSliders(scope = document) {
  scope.querySelectorAll("[data-ghlam-hero]").forEach((section) => {
    if (section.dataset.initialized === "true") return;

    section.dataset.initialized = "true";
    new GhlamHeroSlider(section);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeGhlamHeroSliders();
});

document.addEventListener("shopify:section:load", (event) => {
  initializeGhlamHeroSliders(event.target);
});
