document.addEventListener("DOMContentLoaded", () => {

  // Toggle side navbar
  const toggleSideNavbar = () => {
    try {
      const toggleIcon = document.getElementById("toggle_icon");
      const sideNavbar = document.getElementById("side_navbar");

      if (toggleIcon && sideNavbar) {
        toggleIcon.addEventListener("click", () => {
          sideNavbar.classList.toggle("active");
        });
      } else {
        console.error("Toggle Icon Error: Element not found");
      }
    } catch (error) {
      console.error("Toggle Icon Error:", error);
    }
  };

  // Handle button clicks
  const handleButtonClicked = () => {
    try {
      const last30DaysButton = document.getElementById("last30Days");
      const currentFinancialYearButton = document.getElementById("currentFinancialYear");

      if (last30DaysButton && currentFinancialYearButton) {
        last30DaysButton.addEventListener("click", () => {
          last30DaysButton.classList.add("active");
          currentFinancialYearButton.classList.remove("active");
        });

        currentFinancialYearButton.addEventListener("click", () => {
          currentFinancialYearButton.classList.add("active");
          last30DaysButton.classList.remove("active");
        });
      } else {
        console.error("Button Click Error: Element not found");
      }
    } catch (error) {
      console.error("Button Click Error:", error);
    }
  };

  // Handle custom selector interactions
  const handleSelectorInteractions = () => {
    try {
      const selector = document.getElementById("custom-selector");
      if (!selector) {
        console.error("Custom Selector Error: Element not found");
        return;
      }

      const selectorHeader = selector.querySelector(".selector-header");
      const selectorIcon = selector.querySelector("#r_icon");

      const selectedOptionPlaceholder = document.getElementById("selected-option");
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
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    try {
      const passwordInput = document.getElementById("password-input");
      const passwordToggle = document.getElementById("password-toggle");

      if (passwordInput && passwordToggle) {
        passwordToggle.addEventListener("click", () => {
          passwordInput.type =
            passwordInput.type === "password" ? "text" : "password";
          passwordToggle.classList.toggle("bx-hide");
          passwordToggle.classList.toggle("bx-show");
        });
      }
    } catch (error) {
      console.error("Password Toggle Error:", error);
    }
  };

  // Call functions to handle interactions
  toggleSideNavbar();
  handleButtonClicked();
  handleSelectorInteractions();
  togglePasswordVisibility();
});
