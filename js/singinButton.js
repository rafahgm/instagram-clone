export function signinButtonAction(
  togglePasswordButton,
  siginButton,
  userInput,
  passwordInput
) {
  userInput.addEventListener("input", (e) => {
    if (passwordInput.value.length >= 6 && e.target.value.length > 0) {
      siginButton.className = "signin-btn-enabled";
    } else {
      siginButton.className = "signin-btn";
    }
  });

  passwordInput.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
      togglePasswordButton.style.display = "block";
    } else {
      togglePasswordButton.style.display = "none";
    }
    if (e.target.value.length >= 6 && userInput.value.length > 0) {
      siginButton.className = "signin-butn-enabled";
    } else {
      siginButton.className = "signin-btn";
    }
  });
}
