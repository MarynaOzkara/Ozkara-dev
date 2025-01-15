import { I18n } from "i18n-js";
import translations from "./translations";

const i18n = new I18n(translations);
let currentLang = localStorage.getItem("language") || "en";

console.log(currentLang);
const select = document.querySelector("select");
const navLinks = document.querySelectorAll(".nav-link");

function translatePage() {
  select.value = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    // console.log(key);
    element.textContent = i18n.t(key);
  });
}

select.addEventListener("change", () => {
  currentLang = currentLang === "en" ? "ua" : "en";
  i18n.locale = currentLang;
  localStorage.setItem("language", currentLang);

  translatePage();
});
