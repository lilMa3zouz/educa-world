var navbar = document.getElementById("header");
var buttons = [document.getElementById("toTop"),document.getElementById("toDown")]
var img = document.getElementById("logo");
var sticky = navbar.offsetTop;
window.onscroll = function() {
  if (window.pageYOffset >= img.offsetTop) {
    navbar.classList.add("sticky")
    img.classList.remove("logovisible")
    img.classList.add("logoinvisible")
    

    //buttons.forEach(element => element.classList.remove("visible"))
  } 
  else {
    navbar.classList.remove("sticky");
    img.classList.add("logovisible")
    img.classList.remove("logoinvisible")



    //buttons.forEach(element => element.classList.add("visible"))
  }
};
function getPositionXY(element) { 
  var rect = element.getBoundingClientRect(); 
  resp = {x: rect.x, y: rect.y}
  return resp
}
var actual = ["Accompagnement","carouselExampleIndicators","soutien","apropos","contact"]
let actualDiv;
document.getElementById("toDown").onclick = function(){
  position = getPositionXY(document.getElementById("toDown"))
  divPosition = document.elementFromPoint(position.x - 50, position.y - 150)
  if(actual.includes(divPosition.id)){
    actualDiv = divPosition.id
  }
  else{
    collection = $(divPosition).parents().toArray()
    collection.forEach(function(el){
    if(actual.includes(el.id)){
    actualDiv = el.id
    }
  })
  }
  if(actualDiv!="contact"){
    futurDiv = "#" + actual[actual.indexOf(actualDiv)+1]
    if($(futurDiv).length){
      var getOffset = $(futurDiv).offset().top;

      $('html,body').animate({scrollTop: getOffset - 150}, 500)} 
  }
}
document.getElementById("toTop").onclick = function(){
  position = getPositionXY(document.getElementById("toTop"))
  divPosition = document.elementFromPoint(position.x - 50, position.y )
  if(actual.includes(divPosition.id)){
    actualDiv = divPosition.id
  }
  else{
    collection = $(divPosition).parents().toArray()
    collection.forEach(function(el){
    if(actual.includes(el.id)){
    actualDiv = el.id
    }
  })
  }
  if(actualDiv!="Accompagnement"){
    futurDiv = "#" + actual[actual.indexOf(actualDiv)-1]
    if($(futurDiv).length){
      var getOffset = $(futurDiv).offset().top; 
      $('html,body').animate({scrollTop: getOffset}, 500)} 
  }
}

/* TODO:
#haut -> site-educa1
chercher image site-educa6
card = button (A outline)
*/