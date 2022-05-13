
//script for toggling the menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    //overriding important styling to override font awesome (otherwise bars and close display upon refresh)
    closeIcon.style.setProperty('display', 'block', 'important');

    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
