
//========================
//script for toggling the menu
//========================


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

//========================
//accordion on About page
//========================

const accordion = document.getElementsByClassName("accordion");

for ( i=0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    //adding and removing the 'active' class to highlight the segment that controls the panel
    this.parentElement.classList.toggle('active');

    //hiding and showing the active panel using the sibling li
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
