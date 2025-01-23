let years = document.querySelectorAll("#years");

const startYear = 2011;
const currentYear = new Date().getFullYear();

years.forEach((e, index) => {
  e.innerHTML = currentYear - startYear;
});
if (document.querySelector("#counter")) {
  document
    .querySelector("#counter")
    .setAttribute("data-num", currentYear - startYear);
}
let links = document.querySelectorAll(".link");

// links.forEach((e) => {
//   e.addEventListener("click", () => {
//     links.forEach((e) => {
//       e.classList.remove("active");
//     });
//     e.classList.add("active");
//   });
// });

let drop = document.querySelectorAll(".drop");

drop.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("active");
  });
  // e.addEventListener("click", () => {
  //   e.classList.toggle("active");
  // });
});

drop.forEach((e) => {
  e.addEventListener("mouseleave", () => {
    e.classList.remove("active");
  });
});

let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});

document.addEventListener("DOMContentLoaded", () => {
  const goTopButton = document.querySelector(".goTop");

  if (!goTopButton) return;

  goTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      goTopButton.style.display = "flex";
    } else {
      goTopButton.style.display = "none";
    }
  };

  // Debounce function to limit the rate of execution
  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  window.addEventListener("scroll", debounce(handleScroll, 50)); // Adjust delay as needed
});
