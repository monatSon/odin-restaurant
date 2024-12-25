console.log("JS running!");
import "./style.css";
import { AppendHomePage } from "./components/home_page";
import { AppendContactPage } from "./components/contact_page";
import { AppendAboutPage } from "./components/about_page";
import { AppendMenuPage } from "./components/menu_page";

const Content = document.getElementById("Content");
const HomeBtn = document.getElementById("HomeBtn");
const MenuBtn = document.getElementById("MenuBtn");
const AboutBtn = document.getElementById("AboutBtn");
const ContactBtn = document.getElementById("ContactBtn");

if (Content) {
  AppendHomePage();
}

HomeBtn.addEventListener("click", () => {
  Content.innerHTML = "";
  AppendHomePage();
});

MenuBtn.addEventListener("click", () => {
  Content.innerHTML = "";
  AppendMenuPage();
});

AboutBtn.addEventListener("click", () => {
  Content.innerHTML = "";
  AppendAboutPage();
});

ContactBtn.addEventListener("click", () => {
  Content.innerHTML = "";
  AppendContactPage();
});
