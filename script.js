const year = document.querySelectorAll(".year");
const month = document.querySelectorAll(".month");
const input = document.querySelector(".check");

input.addEventListener("change", () => {
  for (let item of year) {
    item.classList.toggle("show");
  }

  for (let item of month) {
    item.classList.toggle("show");
  }
});
