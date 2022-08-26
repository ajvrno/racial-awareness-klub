// RESOURCES PAGE
var acc = $(".accordion");
var i;

// MAKES RESOURCES ACCORDIAN WORK, source: https://www.w3schools.com/howto/howto_js_accordion.asp
for (i=0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle between adding and removing the "active" class,
    //to highlight the button that controls the panel
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel 
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// TURNING NAVBAR INTO HAMBURGER MENU, source: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
document.querySelector("#myTopnav [data-action=toggleMenu]").addEventListener("click", hamBurger);

function hamBurger() {  
  var jsNav = document.getElementById("myTopnav");
  if (jsNav.className === "navbar") {
    //adds "responsive" class name when menu is toggled
    jsNav.className += " responsive";
  } else {
    jsNav.className = "navbar";
  }
}
