// Your JavaScript goes here.
window.addEventListener('load', function() {

    const clickt = document.getElementById("button");

    clickt.addEventListener("click", function(){
    
      const text = document.getElementsByClassName("toggle_me");
    
      for (var i = 0; i < text.length; i++) {
          if (text[i].style.display === "none") {
          text[i].style.display = "block";
        }
        else {
            text[i].style.display = "none";
        }
      }; 
    
    });
});