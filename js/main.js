//IIFE
(function(){
  //start code
  //variables
  var burgerMenu = document.getElementById("burgerMenu");
  var burgerMenuContainer = document.querySelector(".burgerMenuContainer");
  var navBar = document.querySelector("nav");
  var navHeight = navBar.offsetHeight;
  var navBarStatus = false;
  //mobile menu
  if(window.getComputedStyle(burgerMenuContainer).display !== "none"){
    navBar.style.height = "0px";
  }
  //end code
})();