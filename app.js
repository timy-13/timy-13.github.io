function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbarRight") {
      x.className += " responsive";
      var navbar = document.getElementById("myNavbar")
      navbar.style.width = navbar.style.width === "50%" ? '0%' : '50%';
    } else {
      x.style.width = x.style.width === "50%" ? '0%' : '50%';
      x.className = "navbarRight";
    }
}

function toggleNav() {
  var navbar = document.getElementById("myNavbar");

  if (navbar.style.width === "0%") {
        navbar.style.width = "50%";
      } else {
        navbar.style.width = "0%";
      }
  
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navheader").style.top = "0";
  } else {
    document.getElementById("navheader").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}