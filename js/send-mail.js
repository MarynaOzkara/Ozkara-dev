import axios from "axios";
import IMask from "imask";

const phoneMask = document.getElementById("phone");

IMask(phoneMask, { mask: "+000000000000000" });

const TOKEN = "8132075733:AAHhptqMVWVeF5-M2Mn8QLYQRyU3we2U978";
const CHAT_ID = "-4721378155";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("form");
const button = document.querySelector(".contact-form-btn");
const success = document.querySelector(".success");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value.trim().replace(/\s+/g, " ");
  });

  // Валидация полей на клиенте
  const validationErrors = validateForm(formDataObject);

  // Обновление интерфейса для отображения ошибок
  displayErrors(validationErrors);
  if (validationErrors.length > 0) {
    button.disabled = true;
    return;
  }

  const message = handleMessage(formDataObject);

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      success.classList.remove("disp");
      form.reset();
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      console.log("Script done");
    });
});

function validateForm(formData) {
  const { name, email, phone } = formData;

  const phoneRegex = /^\+[0-9]{8,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = [];

  if (!name) {
    errors.push({ field: "name", message: "Enter your name" });
  } else if (name.length < 3 || name.length > 20) {
    errors.push({
      field: "name",
      message: "Enter correct name. For example: John",
    });
  }

  if (!phone) {
    errors.push({
      field: "phone",
      message: "Enter your phone number",
    });
  } else if (!phoneRegex.test(phone)) {
    errors.push({
      field: "phone",
      message: "Enter correct phone number. For example: +37225785120",
    });
  }

  if (!email) {
    errors.push({
      field: "email",
      message: "Enter your email address",
    });
  } else if (
    !emailRegex.test(email) ||
    email.length < 5 ||
    email.length > 100
  ) {
    errors.push({
      field: "email",
      message:
        "Please, enter the correct email. For example: frontend@gmail.com",
    });
  }

  console.log(errors);
  return errors;
}
function displayErrors(errors) {
  // Скрытие всех ошибок перед отображением новых
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((errorElement) => {
    errorElement.textContent = "";
  });

  if (errors.length < 1) {
    button.disabled = false;
    return;
  }

  // Отображение ошибок для соответствующих полей
  errors.forEach((error) => {
    const { field, message } = error;

    const errorElement = document.querySelector(`[data-for="${field}"]`);
    errorElement.textContent = message;
  });
}
function handleMessage(formData) {
  const { name, email, phone, message } = formData;

  const textMessage =
    "Заявка с сайта - Ozkara-dev\n" +
    "Имя: " +
    name +
    "\n" +
    "Моб. тел: " +
    phone +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Сообщение: " +
    message;

  return textMessage;
}
