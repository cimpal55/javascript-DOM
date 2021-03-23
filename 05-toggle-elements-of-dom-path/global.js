// Your JavaScript goes here.
window.addEventListener('load', function() {

    const clickt = document.getElementById("toggle_button")

    clickt.addEventListener("click", function(){

        const secondfiveToggle = document.querySelectorAll('ul.second_five li');

            for (var i = 0; i < secondfiveToggle.length; i++) {
                if (secondfiveToggle[i].style.display === "none") {
                secondfiveToggle[i].style.display = "block";
          }
            else {
                secondfiveToggle[i].style.display = "none";
          }
        }; 
    });
});