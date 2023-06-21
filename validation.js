// Contact Form Validation Starts Here
// This Function will show error message
const contactForm = document.getElementById("contact-me-form");
const contactFormError = document.getElementById("contact-me-form-error-msg");
const emailRegex =
  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (contactForm.elements.name.value.trim() === "") {
    contactFormError.innerText = "Please enter your name";
    contactFormError.classList.add("contact-me-form-error-msg-display");
  } else if (!emailRegex.test(contactForm.elements.email.value.trim())) {
    contactFormError.innerText = "Please enter your email in lower case";
    contactFormError.classList.add("contact-me-form-error-msg-display");
  } else if (contactForm.elements.message.value.trim() === "") {
    contactFormError.innerText = "Please enter your message";
    contactFormError.classList.add("contact-me-form-error-msg-display");
  } else {
    contactFormError.innerText = "";
    contactFormError.className = "contact-me-form-error-msg-hidden";
    contactForm.submit();
  }
});
