import "./style/style.css";
import loadPage from "./modules/initialPageLoad";
import loadAbout from "./modules/about";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

let about,
  menu,
  contact = null;

function setupTabEvents() {
  const tabDisplay = {
    "toggle-about": about,
    "toggle-menu": menu,
    "toggle-contact": contact,
  };

  const aboutTab = document.getElementById("toggle-about");
  const menuTab = document.getElementById("toggle-menu");
  const contactTab = document.getElementById("toggle-contact");

  const tabs = [aboutTab, menuTab, contactTab];

  tabs.forEach((x) =>
    x.addEventListener("click", () => {
      tabs.forEach((t) => {
        if (t.id === x.id) {
          t.classList.toggle("selected", true);
          tabDisplay[t.id].classList.toggle("hidden", false);
        } else {
          t.classList.toggle("selected", false);
          tabDisplay[t.id].classList.toggle("hidden", true);
        }
      });
    })
  );
}

function initialize() {
  loadPage();

  const displayElement = document.getElementById("display");
  about = loadAbout(displayElement);
  menu = loadMenu(displayElement);
  contact = loadContact(displayElement);

  setupTabEvents();
}

initialize();
