// Your JavaScript goes here.
window.addEventListener('load', function() {

    const one = document.getElementById("first");
    const two = document.getElementById("second");
    const three = document.getElementById("third");

    one.addEventListener("keypress", function() {
        if (one.value.length === 3) {
            two.focus();
        }
    two.addEventListener("keypress", function() {
        if (two.value.length === 3) {
            three.focus();
        }
    });
});
});