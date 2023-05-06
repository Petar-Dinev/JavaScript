function validate() {
  const checkBox = document.getElementById("company");
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      document.getElementById("companyInfo").style.display = "block";
    } else {
      document.getElementById("companyInfo").style.display = "none";
    }
  });

  document.getElementById("submit").addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      (i) => (i.style.borderColor = "")
    );
    let invalidFields = [];
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const companyNumberInput = document.getElementById("companyNumber");

    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    if (!usernamePattern.test(usernameInput.value)) {
      invalidFields.push(usernameInput);
    }
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    if (!emailPattern.test(emailInput.value)) {
      invalidFields.push(emailInput);
    }
    const passwordPattern = /^\w{5,15}$/;
    if (!passwordPattern.test(passwordInput.value) || (passwordInput.value !== confirmPasswordInput.value)) {
      invalidFields.push(passwordInput);
      invalidFields.push(confirmPasswordInput);
    }
    
    if (checkBox.checked) {
      if (
        !(
          Number(companyNumberInput.value) >= 1000 &&
          Number(companyNumberInput.value) <= 9999
        )
      ) {
        invalidFields.push(companyNumberInput);
      }
    }

    invalidFields.forEach((input) => (input.style.borderColor = "red"));
    const validDiv = document.getElementById("valid");
    invalidFields.length
      ? (validDiv.style.display = "none")
      : (validDiv.style.display = "block");
  }
}
