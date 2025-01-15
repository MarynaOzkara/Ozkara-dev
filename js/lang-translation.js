const langArr = {
  siteName: {
    en: "Maryna Ozkara - Full Stack developer",
    ua: "Марина Озкара - Full Stack розробник",
  },
  home: {
    en: "Home",
    ua: "Головна",
  },
  portfolio: {
    en: "Portfolio",
    ua: "Портфоліо",
  },
  contact: {
    en: "Contact",
    ua: "Контакти",
  },
};

const select = document.querySelector("select");
const allLang = ["en", "ua"];
select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;
  document.querySelector("title").innerHTML = langArr["siteName"][hash];
  // document.querySelector(".lng-home").innerHTML = langArr["home"][hash];
  // document.querySelector(".lng-portfolio").innerHTML =
  //   langArr["portfolio"][hash];
  // document.querySelector(".lng-contact").innerHTML = langArr["contact"][hash];
  for (let key in langArr) {
    const elem = document.querySelector(`.lng-${key}`);
    elem.textContent = langArr[key][hash];

    // document.querySelector(".lng-" + key).innerHTML = langArr["home"][hash];
  }
}
changeLanguage();
