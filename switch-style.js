const switchStyleToggler = document.querySelector(".switch-style-toggler");
switchStyleToggler.addEventListener("click", () => {
  document.querySelector(".switch-style").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".switch-style").classList.toggle("open")) {
    document.querySelector(".switch-style").classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

const setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", true);
    }
  });
};

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
