import { togglePassword } from "./togglePassword.js";
import { phoneCarousel } from "./phoneCarousel.js";
import { signinButtonAction } from "./singinButton.js";

const togglePasswordBtn = document.querySelector("#toggleShowPassword");
const passwordInput = document.querySelector("#password");
const display = document.querySelector("#display");
const buffer = document.querySelector("#buffer");
const signinButton = document.querySelector("#signinButton");
const userInput = document.querySelector("#userInput");

togglePassword(passwordInput, togglePasswordBtn);
phoneCarousel(display, buffer);
signinButtonAction(togglePasswordBtn, signinButton, userInput, passwordInput);
