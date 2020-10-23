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
/*document.getElementById("controlLeft").onmouseover = function(){
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
}*/

var circleLeft = new ProgressBar.Circle("#circleLeft", {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 600,
  color: '#1a4175',
  trailColor: '#dedede',
  trailWidth: 1,
  svgStyle: null,
  text: {
        value: '<p><img src="angle-left-icon_2.svg" class="fleches2" id="buttonLeft" style="margin-right:7px;"></p>',
        className: 'progressbar__label',
      }
});

var circleRight = new ProgressBar.Circle("#circleRight", {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 600,
  color: '#1a4175',
  trailColor: '#dedede',
  trailWidth: 1,
  svgStyle: null,
  text: {
    value: '<p style="width:100%;height:100%;text-align:center"><img class="fleches2" src="angle-right-icon_2.svg" style="margin-left:7px;" id="buttonLeft"></p>',
    className: 'progressbar__label',
  }
});

document.getElementById("controlLeft").onmouseover = function(){
  circleLeft.animate(1.0); 
}
document.getElementById("controlLeft").onmouseleave = function(){
  circleLeft.animate(0.0); 
}
document.getElementById("controlRight").onmouseover = function(){
  circleRight.animate(1.0); 
}
document.getElementById("controlRight").onmouseleave = function(){
  circleRight.animate(0.0); 
}