var navbar = document.getElementById("header");
var buttons = [document.getElementById("toTop"),document.getElementById("toDown")]
var img = document.getElementById("top");
var sticky = img.offsetTop;


window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.remove("nosticky")
    navbar.classList.add("text-primary")
    buttons.forEach(element => element.classList.remove("visible"))


  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("nosticky")
    navbar.classList.remove("text-primary")
    buttons.forEach(element => element.classList.add("visible"))
  }

};
var actual = ["#accompagnement","#carouselExampleIndicators","#soutien","#apropos","#contact"]
var n = 0
document.getElementById("toDown").onclick = function(){
  n=n+1
  element = actual[n]
  if($(element).length){
  var getOffset = $(element).offset().top;
  $('html,body').animate({
  scrollTop: getOffset - 100
  }, 500)
  }
}
document.getElementById("toTop").onclick = function(){
  if(n!=0){
    n=n-1
  element = actual[n]
  if($(element).length){
  var getOffset = $(element).offset().top;
  $('html,body').animate({
  scrollTop: getOffset 
  }, 500)
  }
  }
}
