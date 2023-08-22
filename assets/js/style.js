document.addEventListener("DOMContentLoaded", () => {
  const toggleIcon = document.getElementById('toggle_icon');
  const sideNavbar = document.getElementById('side_navbar');

  toggleIcon.addEventListener('click', () => {
    sideNavbar.classList.toggle('active');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("custom-selector");
  const selectorHeader = selector.querySelector(".selector-header");
  const selectorIcon = selector.querySelector("#r_icon");
  const selectedOptionPlaceholder = selector.querySelector("#selected-option");
  const optionsList = selector.querySelector("#options-list");
  const options = Array.from(optionsList.getElementsByClassName("option"));

  selectorHeader.addEventListener("click", () => {
    optionsList.classList.toggle("options-list-visible");
    selectorIcon.classList.toggle("rotate-icon");
  });

  document.addEventListener("click", event => {
    if (!selector.contains(event.target)) {
      optionsList.classList.remove("options-list-visible");
      selectorIcon.classList.remove("rotate-icon");
    }
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      selectedOptionPlaceholder.textContent = option.textContent;
      optionsList.classList.remove("options-list-visible");
      selectorIcon.classList.remove("rotate-icon");
    });
  });

  selectedOptionPlaceholder.textContent = options[0].textContent;

  const passwordInput = document.getElementById("password-input");
  const passwordToggle = document.getElementById("password-toggle");

  passwordToggle.addEventListener("click", () => {
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
    passwordToggle.classList.toggle("bx-hide");
    passwordToggle.classList.toggle("bx-show");
  });
});