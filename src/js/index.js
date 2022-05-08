import htmlHeader from "/src/js/html-header.js";
import theme from "/src/js/theme.js";
import menu from "/src/js/menu.js";
htmlHeader("header");
if (document.querySelector("header").classList.contains("header")) {
    theme("theme-btn");
    menu("icon-menu", "container-menu");
};