function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const errorElement = document.getElementById("error");

  const successElement = document.getElementById("success");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || email === "") {
    errorElement.textContent = "Please fill in all required fields.";
    successElement.textContent = "";
  } else {
    errorElement.textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      errorElement.textContent = "Please enter a valid email address.";
      successElement.textContent = "";
    } else {
      successElement.textContent = "Form submitted successfully!";
      nameInput.value = "";
      emailInput.value = "";
    }
  }
}

const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", handleFormSubmit);
