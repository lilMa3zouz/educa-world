window.onscroll = function() {
{
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;