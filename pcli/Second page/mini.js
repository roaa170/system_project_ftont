function myfun(){
document.getElementById("cairo").style.display=  "flex " ;
    
}
function myfun2(){
    document.getElementById("meno").style.display = "flex" ;
        
    }
  var selectbtn = document.getElementById("btnse")  ;
  function myfunction(){
  document.getElementById("OK").style.visibility = "visible" ;
  


  }
  document.getElementById("btnse").onclick = function() { myfunction()};

  function myfunction3 (){
window.open("../Reservation/index.html", "_self")

  }
  document.getElementById("confirm").onclick = function(){myfunction3};

function myfun3(){
  document.getElementById("OK").style.visibility = "none" ;
}
document.getElementById("cancle").onclick = function() {myfun3()} ;