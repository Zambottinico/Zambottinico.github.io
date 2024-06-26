ScrollReveal().reveal(".navbar", {
  duration: 3000,
  origin: "bottom",
  distance: "-100px",
  beforeReveal: function (el) {
    el.style.transform = "none";
  },
});

ScrollReveal().reveal(".rowA", {
  duration: 2000,
  origin: "top",
  distance: "-100px",
  beforeReveal: function (el) {
    el.style.transform = "none";
  },
});

ScrollReveal().reveal(".footer", {
  duration: 2000,
  origin: "top",
  distance: "-100px",
});
ScrollReveal().reveal(".home", {
  duration: 2000,
  origin: "top",
  distance: "-100px",
  beforeReveal: function (el) {
    el.style.transform = "none";
  },
});
