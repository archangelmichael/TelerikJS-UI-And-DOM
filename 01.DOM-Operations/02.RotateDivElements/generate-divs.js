(function myfunction() {
    function generateDivElement() {
        var div = document.createElement("div");
        div.style.width = getRandomSize(20, 200) + "px";
        div.style.height = getRandomSize(20, 200) + "px";
        div.style.backgroundColor = getRandomColor();
        div.style.color = getRandomColor();
        div.style.position = "absolute";
        div.style.top = getRandomSize(0, 75) + '%';
        div.style.left = getRandomSize(0, 75) + '%';
        div.style.borderRadius = getRandomSize(0, 1000) + "px";
        div.style.borderWidth = getRandomSize(1, 20) + "px";
        div.style.borderColor = getRandomColor();
        return div;
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

    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.radius = r;

        this.el = document.createElement('div');
        var style = this.el.style;

        style.width = r * 2 + 'px';
        style.height = r * 2 + 'px';

        style.position = 'absolute';
        style.top = x - r + 'px';
        style.left = y - r + 'px';

        style.borderRadius = '50%';
        style.borderColor = 'black';
        style.borderWidth = '1px';
        style.borderStyle = 'solid';
    }

    Circle.prototype.drawAtDegrees = function (el, degrees) {
        var x = this.x + this.radius * Math.cos(degrees * Math.PI / 180),
          y = this.y + this.radius * Math.sin(degrees * Math.PI / 180);

        el.style.left = x - parseInt(el.style.width, 10) / 2 + 'px';
        el.style.top = y - parseInt(el.style.height, 10) / 2 + 'px';
    };

    var i,
        rotationDegree = 1,
        width = document.body.style.width,
        height = document.body.style.height;
        divsContainer = document.createDocumentFragment(),
        divList = [],
        divCount = 5,
        circle = new Circle(200, 200, 100);

    divsContainer.appendChild(circle.el);

    for (i = 0; i < divCount; i += 1) {
        div = generateDivElement();
        divsContainer.appendChild(div);
        divList.push(div);
        var degrees = i * 360 / divCount;
        div.setAttribute('data-degrees', degrees);
        circle.drawAtDegrees(div, degrees);
    }

    document.body.appendChild(divsContainer);

    setInterval(function () {
        for (i = 0; i < divCount; i += 1) {
            div = divList[i];
            degrees = (parseFloat(div.getAttribute('data-degrees')) + rotationDegree) % 360;
            div.setAttribute('data-degrees', degrees);
            circle.drawAtDegrees(div, degrees);
        }
    }, 100);
})();