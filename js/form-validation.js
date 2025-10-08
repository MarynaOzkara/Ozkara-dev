import axios from "axios";
import IMask from "imask";
import JustValidate from "just-validate";

const phoneMask = document.getElementById("phone");
const success = document.querySelector(".success");
const errorSend = document.querySelector(".error-message");
const { VITE_CHAT_ID, VITE_TOKEN } = import.meta.env;

const URL_API = `https://api.telegram.org/bot${VITE_TOKEN}/sendMessage`;

IMask(phoneMask, { mask: "+000000000000000" });

const validate = new JustValidate("#form", {
  errorLabelStyle: {
    color: "red",
  },
});
validate
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Enter your name",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Name must be at least 3 characters",
    },
    {
      rule: "maxLength",
      value: 20,
      errorMessage: "Name can't be more then 20 characters",
    },
  ])
  .addField("#phone", [
    {
      rule: "required",
      errorMessage: "Enter your phone",
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Enter the full phone number with country code",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Enter valid email",
    },
    {
      rule: "email",
    },
  ])
  .addField("#agree", [
    {
      rule: "required",
      errorMessage: "You should accept the terms of the Privacy Policy",
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Відправляємо дані до Telegram
    sendToTelegram(data);
  });

// Функція для відправки даних до Telegram
function sendToTelegram(data) {
  const message = `
    📝 <b>Нова заявка з сайту - Ozkara-dev:</b>
    - <b>Name:</b> ${data.name}
    - <b>Phone:</b> ${data.phone}
    - <b>Email:</b> ${data.email}
    - <b>Message:</b> ${data.message}
  `;

  axios
    .post(URL_API, {
      chat_id: VITE_CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      success.classList.remove("disp");
      console.log(res);
      form.reset();
    })
    .catch((err) => {
      errorSend.classList.remove("disp");
      console.warn(err);
    });
}
