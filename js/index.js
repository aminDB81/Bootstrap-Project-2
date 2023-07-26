document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var navbar = document.querySelector(".navbar");
      var scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });