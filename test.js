/*let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let p1 = document.getElementById("p1");
let l1 = document.getElementById("l1");

window.alert("test")

d1.addEventListener("mouseover", () => {p1.style.display = "block";});
d1.addEventListener("mouseout", () => {p1.style.display = "none";});

d2.onmouseover = aff;
function aff(){
  window.alert("1")
  l1.style.display = "block";
  window.alert("2")
}
d2.onmouseout = cac;
function cac(){
  window.alert("3")
  l1.style.display = "none";
  window.alert("4")
}*/

function hide(id){ /*fonction qui permet d'afficher et de cacher le texte au passage de la souris*/
  document.getElementById(id).style.display = "none";
}

function show(id){
  document.getElementById(id).style.display = "block";
}