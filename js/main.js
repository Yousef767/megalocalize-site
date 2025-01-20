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
