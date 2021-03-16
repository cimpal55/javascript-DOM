window.addEventListener('load', function() {

    const clickt = document.getElementById("button");

    clickt.addEventListener("click", function(){
    
      const text = document.getElementsByClassName("show_me");
    
      for (var i = 0; i < text.length; i++) {
          text[i].style.display = "block";
      };
    
    });
});