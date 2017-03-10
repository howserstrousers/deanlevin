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
    $(".year").on("click", function(e) {  
        $(".zone").toggle();
    });
});