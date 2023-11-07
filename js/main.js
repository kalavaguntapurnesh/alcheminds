const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


window.onscroll = function() {myFunction()};
      
    var navbar1 = document.getElementsByClassName("navbar");
    var sticky = navbar1.offsetTop;
      
    /* Function to stick the nav bar */
    function myFunction() {
        if (window.scrollY >= sticky) {
            navbar1.classList.add("sticky")
        } 
          else {
              navbar1.classList.remove("sticky");
          }
    }