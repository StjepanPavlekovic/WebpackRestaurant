function loadPage() {
  const toggleDiv = document.createElement("div");
  toggleDiv.setAttribute("id", "toggle");

  const aboutTab = document.createElement("h3");
  aboutTab.setAttribute("class", "selected");
  aboutTab.setAttribute("id", "toggle-about");
  aboutTab.textContent = "About";

  const menuTab = document.createElement("h3");
  menuTab.setAttribute("id", "toggle-menu");
  menuTab.textContent = "Menu";

  const contactTab = document.createElement("h3");
  contactTab.setAttribute("id", "toggle-contact");
  contactTab.textContent = "Contact";

  const displayDiv = document.createElement("div");
  displayDiv.setAttribute("id", "display");

  toggleDiv.appendChild(aboutTab);
  toggleDiv.appendChild(menuTab);
  toggleDiv.appendChild(contactTab);

  const contentElement = document.getElementById("content");
  contentElement.appendChild(toggleDiv);
  contentElement.appendChild(displayDiv);
}

export default loadPage;
