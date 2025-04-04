document.addEventListener("DOMContentLoaded", function () {
    const showPasswordCheckbox = document.getElementById("showPassword");
    const passwordInput = document.getElementById("password");
  
    showPasswordCheckbox.addEventListener("change", function () {
      passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
    });
  });
  