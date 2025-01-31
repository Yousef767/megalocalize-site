(function () {
  emailjs.init({
    publicKey: "eKsG91wl2XrMZlcQI",
  });
})();

const form = document.getElementById("form");
const inputs = document.querySelectorAll(".input input, .input textarea");

const message = (message, isError) => {
  const div = document.createElement("div");
  div.className = isError ? "message errorMessage" : "message";
  const span = document.createElement("span");
  const i = document.createElement("i");
  i.className = isError
    ? "fa-regular fa-circle-x"
    : "fa-regular fa-circle-check";
  span.innerHTML = message;
  document.body.appendChild(div);
  div.appendChild(span);
  span.prepend(i);
  setTimeout(() => {
    div.remove();
  }, 3000);
};

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputs[0].value.trim().length === 0) {
    message("Name is required", true);
    return false;
  }
  if (inputs[0].value.length <= 4) {
    message("Please enter a valid name", true);
    return false;
  }

  const email = inputs[1].value.trim();
  if (email.length === 0) {
    message("Email is required", true);
    return false;
  }
  if (!emailRegex.test(email)) {
    message("Please enter a valid email address", true);
    return false;
  }

  if (inputs[2].value.trim().length === 0) {
    message("Subject is required", true);
    return false;
  }

  if (inputs[3].value.trim().length === 0) {
    message("Message content is required", true);
    return false;
  }
  
  const formData = {
    name: inputs[0].value,
    email: inputs[1].value,
    subject: inputs[2].value,
    message: inputs[3].value,
  };
  emailjs
    .send("service_4nala8b", "template_qk23t74", formData)
    .then((response) => {
      message("Form submitted successfully", false);
      console.log("Success:", response);
      inputs.forEach((e) => {
        e.value = "";
      });
    })
    .catch((error) => {
      message("Failed to send the form. Please try again.", true);
      console.log("Error:", error);
    });
});
