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
//ldio-84lxrpe6gsk 1.36986301369863s linear
document.getElementById("controlLeft").onmouseover = function(){
$("#circleLeft").css("animation","ldio-84lxrpe6gsk 1.36986301369863s linear infinite")
$("#circleLeft").css("display","block")
}
document.getElementById("controlLeft").onmouseout = function(){
$("#circleLeft").css("animation","")
$("#circleLeft").css("display","none")
}
document.getElementById("controlRight").onmouseover = function(){
$("#circleRight").css("animation","ldio-84lxrpe6gsk 1.36986301369863s linear infinite")
$("#circleRight").css("display","block")
}
document.getElementById("controlRight").onmouseout = function(){
$("#circleRight").css("animation","")
$("#circleRight").css("display","none")
}