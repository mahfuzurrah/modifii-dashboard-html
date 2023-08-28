document.addEventListener("DOMContentLoaded", () => {
    //////////// toggle side navbar
  try {
    const toggleIcon = document.getElementById("toggle_icon");
    const sideNavbar = document.getElementById("side_navbar");

    toggleIcon.addEventListener("click", () => {
      sideNavbar.classList.toggle("active");
    });
  } catch (error) {
    console.error("Toggle Icon Error:", error);
  }

  try {
    const last30DaysButton = document.getElementById("last30Days");
    const currentFinancialYearButton = document.getElementById(
      "currentFinancialYear"
    );

    last30DaysButton.addEventListener("click", () => {
      last30DaysButton.classList.add("active");
      currentFinancialYearButton.classList.remove("active");
    });

    currentFinancialYearButton.addEventListener("click", () => {
      currentFinancialYearButton.classList.add("active");
      last30DaysButton.classList.remove("active");
    });
  } catch (error) {
    console.error("Button Click Error:", error);
  }

  //////////// custom-selector
  try {
    const selector = document.getElementById("custom-selector");
    const selectorHeader = selector.querySelector(".selector-header");
    const selectorIcon = selector.querySelector("#r_icon");
    const selectedOptionPlaceholder =
      document.getElementById("selected-option");
    const optionsList = selector.querySelector("#options-list");
    const options = Array.from(document.querySelectorAll(".option"));

    selectorHeader.addEventListener("click", () => {
      optionsList.classList.toggle("options-list-visible");
      selectorIcon.classList.toggle("rotate-icon");
    });

    document.addEventListener("click", (event) => {
      if (!selector.contains(event.target)) {
        optionsList.classList.remove("options-list-visible");
        selectorIcon.classList.remove("rotate-icon");
      }
    });

    selector.addEventListener("click", (event) => {
      if (event.target.classList.contains("option")) {
        const optionText = event.target.textContent;
        selectedOptionPlaceholder.textContent = optionText;
        optionsList.classList.remove("options-list-visible");
        selectorIcon.classList.remove("rotate-icon");
      }
    });

    const defaultOptionText = options[0].textContent;
    selectedOptionPlaceholder.textContent = defaultOptionText;
  } catch (error) {
    console.error("Selector Interaction Error:", error);
  }


//////////// password-toggle
  try {
    const passwordInput = document.getElementById("password-input");
    const passwordToggle = document.getElementById("password-toggle");

    passwordToggle.addEventListener("click", () => {
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
      passwordToggle.classList.toggle("bx-hide");
      passwordToggle.classList.toggle("bx-show");
    });
  } catch (error) {
    console.error("Password Toggle Error:", error);
  }
});
