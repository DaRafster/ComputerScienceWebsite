// Responsive Menu JS

let big_wrapper = document.querySelector(".big-wrapper");
let hamburger_menu = document.querySelector(".hamburger-menu");

function events() {
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

