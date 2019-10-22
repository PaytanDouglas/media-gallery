//* Page Scripts
//Mobile navigation Toggle
function navToggle() {
  var x = document.getElementById("main-nav");  //creates a variable set to #main-nav
  if (x.className === "topnav") {               //if #main-nav has a class of .topnav
    x.className += " responsive";               //then add a new class
  }
  else {                                        //Otherwise
    x.className = "topnav";                     //set class to .topnav
  }
}
