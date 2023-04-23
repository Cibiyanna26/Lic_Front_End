var sub_items = document.querySelector(".tut-nav-sub-item");

let fl = 0;

function showmenu(element){
  fl = 1 - fl;
  if(fl==1){
    sub_items.classList.remove("invisible");
    sub_items.classList.add("show");
    
  }
  else{
    sub_items.classList.remove("show");
    sub_items.classList.add("invisible");
  }
}
const sub_menu = document.querySelector(".tut-flex-2");

function show(){
  sub_menu.style.right="400px";
}
function hide(){
  sub_menu.style.right="-400px";
}

// slide code


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myslides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
