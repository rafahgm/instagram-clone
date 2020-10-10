const display = document.querySelector("#display");
const buffer = document.querySelector("#buffer");

const images = [
  "phone-content1.jpg",
  "phone-content2.jpg",
  "phone-content3.jpg",
  "phone-content4.jpg",
  "phone-content5.jpg",
];

let currentIndex = 0;
let nextIndex = 1;

display.style.backgroundImage = `url("./${images[currentIndex]}")`;
buffer.style.backgroundImage = `url("./${images[nextIndex]}")`;

setInterval(() => {
  display.style.transition = "all 2s";
  display.style.opacity = "0";

  setTimeout(() => {
    display.style.backgroundImage = `url("./${images[nextIndex]}")`;

    display.style.transition = "none";
    display.style.opacity = 1;

    currentIndex = nextIndex;
    if (currentIndex === images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    buffer.style.backgroundImage = `url("./${images[nextIndex]}")`;
  }, 2500);
}, 3000);

const togglePasswordButton = document.querySelector("#toggleShowPassword");
const passwordInput = document.querySelector("#password");

togglePasswordButton.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  if (type === "password") {
    togglePasswordButton.innerHTML = "Mostrar";
  } else {
    togglePasswordButton.innerHTML = "Ocultar";
  }
});

const siginButton = document.querySelector("#signinButton");
const userInput = document.querySelector("#userInput");

userInput.addEventListener("input", (e) => {
  if (passwordInput.value.length >= 6 && e.target.value.length > 0) {
    siginButton.className = "signin-button-enabled";
  } else {
    siginButton.className = "signin-button";
  }
});

passwordInput.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    togglePasswordButton.style.display = "block";
  } else {
    togglePasswordButton.style.display = "none";
  }
  if (e.target.value.length >= 6 && userInput.value.length > 0) {
    siginButton.className = "signin-button-enabled";
  } else {
    siginButton.className = "signin-button";
  }
});
