export function togglePassword(passwordInput, togglePasswordButton) {
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
}
