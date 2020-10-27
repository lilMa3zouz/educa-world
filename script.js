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
var circleLeft = new ProgressBar.Circle("#circleLeft", {
  strokeWidth: 3,
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
  strokeWidth: 3,
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

var order = [
  {
   id: "header",
   cible: "top",
   add: "animate__slideInLeft",
   remove: "hidden"
  },
  {
    id: "top",
   cible: "bigLogo",
   add: "animate__backInUp",
   remove: "hidden"
  },
  {
   id:"bigLogo",
   cible:"citation",
   add: "x",
   remove: "undefined"
  }
]
order.forEach(function(element){
  document.getElementById(element.id).addEventListener("animationend",function(){
    document.getElementById(element.cible).classList.add(element.add)
    document.getElementById(element.cible).classList.remove(element.remove)
    console.log("pute")
  })
})