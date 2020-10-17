var navbar = document.getElementById("header");
var cible = document.getElementById("ecole");
var buttons = [document.getElementById("toTop"),document.getElementById("toDown")]
var img = document.getElementById("logo");
var sticky = navbar.offsetTop;
function getPositionXY(element) { 
  var rect = element.getBoundingClientRect(); 
  resp = {x: rect.x, y: rect.y}
  return resp
}
var actual = ["Accompagnement","carouselExampleIndicators","soutien","apropos","contact"]
let actualDiv;