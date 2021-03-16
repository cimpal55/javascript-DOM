window.addEventListener('load', function(){

    const click = document.getElementById("button");

    click.addEventListener("click", function(){
  
        const elementhide = document.getElementsByClassName("hide_me");
  
        for (var i = 0; i < elementhide.length; i++) {
			elementhide[i].style.display = "none";
      }
    });
  
  });