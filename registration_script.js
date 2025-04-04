document.addEventListener("DOMContentLoaded", function () {
    // Get the KYF checkbox and fields container
    const kyfCheckbox = document.getElementById("kyf");
    const kyfFields = document.getElementById("kyfFields");

    // Function to toggle KYF fields
    function toggleKYFOptions() {
        if (kyfCheckbox.checked) {
            kyfFields.classList.remove("hidden"); // Show fields
        } else {
            kyfFields.classList.add("hidden"); // Hide fields
        }
    }

    // Event listener for checkbox change
    kyfCheckbox.addEventListener("change", toggleKYFOptions);

    // Ensure fields remain hidden on page load if unchecked
    toggleKYFOptions();
});

function toggleOtherSkill() {
    let skillSelect = document.getElementById("farmingSkill");
    let otherSkillContainer = document.getElementById("otherSkillContainer");

    if (skillSelect.value === "other") {
        otherSkillContainer.style.display = "block";
    } else {
        otherSkillContainer.style.display = "none";
    }
}
