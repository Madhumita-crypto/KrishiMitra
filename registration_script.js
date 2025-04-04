document.addEventListener("DOMContentLoaded", function () {
    const kyfCheckbox = document.getElementById("kyf");
    const kyfFields = document.getElementById("kyfFields");
    const showPasswordCheckbox = document.getElementById("showPassword");
    const passwordInput = document.getElementById("passwordInput");
  
    // Toggle KYF extra fields
    kyfCheckbox.addEventListener("change", function () {
      if (kyfCheckbox.checked) {
        kyfFields.classList.remove("hidden");
      } else {
        kyfFields.classList.add("hidden");
      }
    });
  
    // Toggle password visibility
    showPasswordCheckbox.addEventListener("change", function () {
      passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
    });
  
    // Skill selection toggle
    const skillSelect = document.getElementById("farmingSkill");
    const otherSkillContainer = document.getElementById("otherSkillContainer");
  
    skillSelect.addEventListener("change", function () {
      if (skillSelect.value === "other") {
        otherSkillContainer.style.display = "block";
      } else {
        otherSkillContainer.style.display = "none";
      }
    });
  });
  
