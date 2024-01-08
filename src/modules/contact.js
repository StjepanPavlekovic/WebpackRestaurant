function loadContact(displayElement) {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("hidden");
  contactDiv.setAttribute("id", "contact");

  const heading = document.createElement("h1");
  heading.textContent = "Want a table? Let us know!";

  const subHeading = document.createElement("h2");
  subHeading.textContent =
    "Send us your inquiry and we will get back to you asap!";

  const form = document.createElement("form");
  form.setAttribute("id", "contact-form");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "John Doe");
  nameInput.setAttribute("required", "true");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";

  const emailInput = document.createElement("input");
  emailInput.setAttribute("placeholder", "john@doe.com");
  emailInput.setAttribute("required", "true");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("id", "email");

  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Your message:";

  const messageTextarea = document.createElement("textarea");
  messageTextarea.setAttribute("placeholder", "Enter your message here!");
  messageTextarea.setAttribute("required", "true");
  messageTextarea.setAttribute("name", "message");
  messageTextarea.setAttribute("id", "message");

  const sendButton = document.createElement("input");
  sendButton.setAttribute("type", "submit");
  sendButton.setAttribute("value", "Send");
  sendButton.setAttribute("id", "btnSend");

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageTextarea);
  form.appendChild(sendButton);

  contactDiv.appendChild(heading);
  contactDiv.appendChild(subHeading);
  contactDiv.appendChild(form);

  displayElement.appendChild(contactDiv);
}

export default loadContact;
