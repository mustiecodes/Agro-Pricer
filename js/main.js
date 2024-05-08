const subscribeButtons = document.querySelectorAll(".subscribe");
const sendMail = document.querySelector(".send_mail");
const toastMessage = document.querySelector(".toast-message");
const subscribeForm = document.querySelector("#subscribe_form");
const emailInput = document.querySelector("#email");
const productList = document.querySelector("#products_list");
const contactUsEmailInput = document.querySelector("#contact_us_email");
const contactUsNameInput = document.querySelector("#contact_us_name");
const contactUsMessageInput = document.querySelector("#contact_us_message");
const contactUs = document.querySelector(".contact_us");

function toggleSubscribe() {
  subscribeForm.setAttribute("class", "overlay open");
}

subscribeButtons.forEach((subscribeButton) => {
  subscribeButton.addEventListener("click", toggleSubscribe);
});

function showSuccessMessage(message) {
  toastMessage.textContent = `${message}`;
  toastMessage.style.display = "block";
  setTimeout(() => {
    toastMessage.style.display = "none";
  }, 3000); // Adjust the time (in milliseconds) you want the message to stay visible
}

sendMail.addEventListener("click", (event) => {
  event.preventDefault();

  if (!emailInput.value || !productList.value) {
    return;
  }

  showSuccessMessage(
    "Subscribed successfully. We will send you an email shortly!"
  );

  subscribeForm.setAttribute("class", "overlay");
});

contactUs.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("aaa");

  if (
    !contactUsEmailInput.value ||
    !contactUsNameInput.value ||
    !contactUsMessageInput.value
  ) {
    return;
  }

  showSuccessMessage("Message sent successfully!");
});
