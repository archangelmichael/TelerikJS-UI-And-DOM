window.onload = function myfunction() {
    var background = document.getElementById("background-color"),
        font = document.getElementById("font-color"),
        area = document.getElementById("textarea-output");
    console.log(background.value); 
    console.log(font.value);
    font.addEventListener("change", function myfunction() { changeFontColor(area, font.value);});
    background.addEventListener("change", function myfunction() { changeBackgroundColor(area, background.value);});
};

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

function changeFontColor(element, color) {
    element.style.color = color;
}