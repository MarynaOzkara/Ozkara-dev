const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".mob-nav-btn");
const navBtnImg = document.querySelector(".nav-btn-img");

navBtn.addEventListener("click", function () {
  if (nav.classList.toggle("open")) {
    document.body.classList.add("no_scroll");
    navBtnImg.src = "/img/nav-close.svg";
  } else {
    navBtnImg.src = "/img/nav.svg";
    document.body.classList.remove("no_scroll");
  }
});

let currentLink = location.pathname;

document.querySelectorAll(".nav-link").forEach((item) => {
  let linkHref = item.getAttribute("href");
  if (currentLink === linkHref) {
    console.log(item);
    item.classList.add("active");
  }
  console.log(item);
});
