import './styles.css';
import {homePage} from './modules/home.js';
//import './pizza-image.jpg';
import {menuPage} from './modules/menu.js';
import {aboutPage} from './modules/about.js';


homePage();

const contentDiv = document.getElementById("content"); 

const homeBtn = document.getElementById("home");
 homeBtn.addEventListener("click", () => homeTab());

const logoBtn = document.getElementById("logo");
logoBtn.addEventListener("click", () => homeTab());

 function homeTab() {
    contentDiv.innerHTML = "";
    homePage();
 }

 
 const menuBtn = document.getElementById("menu");
 menuBtn.addEventListener("click", () => menuTab());

 function menuTab() {
    contentDiv.innerHTML = "";
    menuPage();
 }

 const aboutBtn = document.getElementById("about");
 aboutBtn.addEventListener("click", () => aboutTab());

 function aboutTab() {
    contentDiv.innerHTML = "";
    aboutPage();
 }

