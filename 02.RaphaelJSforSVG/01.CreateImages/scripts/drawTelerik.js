(function () {
    var paper = Raphael(10, 10, 500, 200);

    paper.path("M40 68 62 47 113 100 88 123 63 100 114 47 136 68")
    .attr({
        stroke: 'lightgreen',
        'stroke-width': 10
    });


    paper.text(260, 100, "Telerik")
    .attr({
        'font-size': 70,
        'font-weight': 'bold'
    });

    paper.text(300, 145, "Developer experiences")
    .attr({
        'font-size': 27
    });

    paper.circle(382, 95, 6)
    .attr({
        stroke: 'black'
    });


    paper.text(381, 95, "R")
    .attr({
        'font-size': 10,
        'font-weight': 'bold'
    });
}());