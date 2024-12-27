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
