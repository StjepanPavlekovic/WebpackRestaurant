import "./style/style.css";
import loadPage from "./modules/initialPageLoad";
import loadAbout from "./modules/about";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

function initialize() {
  const displayElement = document.getElementById("display");
  loadPage();
  loadAbout(displayElement);
  loadMenu(displayElement);
  loadContact(displayElement);
}

initialize();
