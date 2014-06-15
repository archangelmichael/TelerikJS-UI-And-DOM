var button = document.getElementById("button"),
    strong = document.createElement("strong");
    width = document.body.style.width,
    height = document.body.style.height;
strong.innerHTML = "div";
button.addEventListener("click", generateDivElement);

function generateDivElement() {
    var div = document.createElement("div");
    div.style.width = getRandomSize(20, 100) + "px";
    div.style.height = getRandomSize(20, 100) + "px";
    div.style.backgroundColor = getRandomColor();
    div.style.color = getRandomColor();
    div.style.position = "absolute";
    div.style.top = getRandomSize(0, 75) + '%';
    div.style.left = getRandomSize(0, 75) + '%';
    div.style.borderRadius = getRandomSize(0, 1000) + "px";
    div.style.borderWidth = getRandomSize(1, 20) + "px";
    div.style.borderColor = getRandomColor();
    div.appendChild(strong.cloneNode(true));
    document.body.appendChild(div);
}

function getRandomSize(start, stop) {
    var number = Math.floor(Math.random() * (stop - start + 1)) + start;
    return number;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}