import axios from "axios";
import IMask from "imask";
import JustValidate from "just-validate";

const phoneMask = document.getElementById("phone");

IMask(phoneMask, { mask: "+000000000000000" });

const validate = new JustValidate("#form", {
  errorLabelStyle: {
    color: "white",
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
      errorMessage: "Enter minimum 3 symbols",
    },
  ])
  .addField("#phone", [
    {
      rule: "required",
      errorMessage: "Enter your phone",
    },
    {
      rule: "minLength",
      value: 8,
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
  .onSuccess();
