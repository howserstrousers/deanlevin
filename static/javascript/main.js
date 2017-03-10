var slideIndex = 1;
var capIndex = 1;
    
    showDivs(slideIndex);
    showCap(capIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
      showCap(capIndex += n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName( "mySlides");


      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }

    function showCap(n) {
      var d;
      var y = document.getElementsByClassName( "myCap");

      if (n > y.length) {capIndex = 1}    
      if (n < 1) {capIndex = y.length}
      for (d = 0; d < y.length; d++) {
         y[d].style.display = "none";  
      }
      y[capIndex-1].style.display = "block";  
    }

$(document).ready(function(){ 
    toggleFourteenHandler();
    //$(".year").on("click", function(e) {  
      
        //$(".zone").toggle();
   // });
});

function toggleFourteenHandler() {
  $(".year").on("click", function(e){
    var idToActive = e.currentTarget.dataset.child;
    debugger;
    if(childActive(idToActive)) {
      removeActive();
    } else {
       addActive(idToActive);
    }
  })
}

function addActive(id) {
  removeActive();
  var node = $("#" + id); 
  node.attr("data-active", "true")
  node.show();
}

function removeActive() {
  var activeNode = $('*[data-active="true"]')
  activeNode.hide();
  activeNode.attr("data-active", "false");
}

function childActive(id) {
  return $("#" + id)[0] == $('*[data-active="true"]')[0];
}