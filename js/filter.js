const filterCategory = document.querySelectorAll(".portfolio-list-item");
const filterNav = document.querySelector(".portfolio-filter");

filterNav.addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;

  let filterClass = event.target.dataset["f"];
  filterCategory.forEach((elem) => {
    console.log(filterClass);
    elem.classList.remove("hidden");
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.classList.add("hidden");
    }
  });
});
