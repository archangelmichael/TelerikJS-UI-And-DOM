(function () {
    var paper = Raphael(500, 10, 500, 200);

    paper.text(125, 100, "You")
    .attr({
        'font-size': 70,
        'font-weight': 'bold',
        fill: "#4b4b4b"
    })
    .scale(1, 1.5);

    Raphael.fn.roundedRectangle = function (x, y, w, h, r1, r2, r3, r4) {
        var array = [];
        array = array.concat(["M", x, r1 + y, "Q", x, y, x + r1, y]); //A
        array = array.concat(["L", x + w - r2, y, "Q", x + w, y, x + w, y + r2]); //B
        array = array.concat(["L", x + w, y + h - r3, "Q", x + w, y + h, x + w - r3, y + h]); //C
        array = array.concat(["L", x + r4, y + h, "Q", x, y + h, x, y + h - r4, "Z"]); //D

        return this.path(array);
    };

    paper.roundedRectangle(202, 45, 200, 110, 30, 30, 30, 30)
    .attr({
        fill: "#ec2828",
        "stroke": "none"
    });

    paper.text(300, 100, "Tube")
    .attr({
        'font-size': 70,
        'font-weight': 'bold',
        fill: "#fff"
    })
    .scale(1, 1.5);
}());