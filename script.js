var navbar = document.getElementById("header");
var img = document.getElementById("top");
var sticky = img.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.remove("nosticky")
    navbar.classList.add("text-primary")

  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("nosticky")
    navbar.classList.remove("text-primary")
  }
};

