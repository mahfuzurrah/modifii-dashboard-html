// Password selector

const selector = document.getElementById("custom-selector");
const selectorHeader = document.querySelector(".selector-header");
const selectorIcon = document.getElementById("r_icon");
const selectedOptionPlaceholder = document.getElementById("selected-option");
const optionsList = document.getElementById("options-list");
const options = document.querySelectorAll(".option");

const toggleOptions = () => {
    optionsList.classList.toggle("options-list-visible");
    selectorIcon.classList.toggle("rotate-icon");
};

selectorHeader.addEventListener("click", toggleOptions);

document.addEventListener("click", event => {
    if (!selector.contains(event.target)) {
        optionsList.classList.remove("options-list-visible");
        selectorIcon.classList.remove("rotate-icon");
    }
});

options.forEach(option => {
    option.addEventListener("click", () => {
        selectedOptionPlaceholder.textContent = option.textContent;
        toggleOptions();
    });
});

// Initialize the selected value to the first option
selectedOptionPlaceholder.textContent = options[0].textContent;


// Password toggle

const passwordInput = document.getElementById("password-input");
const passwordToggle = document.getElementById("password-toggle");

passwordToggle.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.classList.remove("bx-hide");
    passwordToggle.classList.add("bx-show");
  } else {
    passwordInput.type = "password";
    passwordToggle.classList.remove("bx-show");
    passwordToggle.classList.add("bx-hide");
  }
});


