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
    burgerMenu.addEventListener("click", function(){
      if(navBarStatus){
        navBarStatus = false;
        navBar.style.height = "0px";
        burgerMenu.setAttribute("src","images/Hamburger_icon_white.svg")
        }
        else{
           navBarStatus = true;
           navBar.style.height = navHeight + "px";
           burgerMenu.setAttribute("src", "images/x-mark.png")
         }
    });
    }
  //end code
})();