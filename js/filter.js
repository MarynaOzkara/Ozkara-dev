const projects = document.querySelectorAll(".portfolio-list-item");

const filterNav = document.querySelector(".portfolio-filter");
filterNav.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return false;

  let filterCategory = event.target.dataset["f"];
  projects.forEach((elem) => {
    elem.classList.remove("hidden");
    if (!elem.classList.contains(filterCategory) && filterCategory !== "all") {
      elem.classList.add("hidden");
    }
  });
});
