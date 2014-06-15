(function myfunction() {
    'use strict';
    var path, rect, image, circle, text, svg, svgNameSpace;
    
    function createRect(x, y, width, height, fillColor, stroke, sWidth) {
        var rect,
            strokeColor = 'green' || stroke,
            strokeWidth = 5 || sWidth;
        rect = document.createElementNS(svgNameSpace, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', fillColor);
        rect.setAttribute('stroke', strokeColor);
        rect.setAttribute('stroke-width', strokeWidth);
        return rect;
    }

    function createPath(points, fill, stroke, sWidth) {
        var path,
        path = document.createElementNS(svgNameSpace, 'path');
        path.setAttribute('d', points);
        path.setAttribute('fill', fill);
        path.setAttribute('stroke', stroke);
        path.setAttribute('stroke-width', sWidth);
        return path;
    }

    function createText(coordX, coordY, input, fill, fontsize, fontweight, fontfamily, stroke, sWidth) {
        var text,
            strokeColor = stroke || 'none',
            strokeWidth = sWidth || 3;
        text = document.createElementNS(svgNameSpace, 'text');
        text.innerHTML = input;
        text.setAttribute('x', coordX);
        text.setAttribute('y', coordY);
        text.setAttribute('fill', fill);
        text.setAttribute('font-size', fontsize);
        text.setAttribute('font-weight', fontweight);
        text.setAttribute('font-family', fontfamily);
        text.setAttribute('stroke', strokeColor);
        text.setAttribute('stroke-width', strokeWidth);
        return text;
    }

    function createCircle(cx, cy, radius, fill, stroke, sWidth) {
        var circle,
            strokeColor = stroke || 'none',
            strokeWidth = sWidth || 3;
        circle = document.createElementNS(svgNameSpace, 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', fill);
        circle.setAttribute('stroke', strokeColor);
        circle.setAttribute('stroke-width', strokeWidth);
        return circle;
    }

    function createImage(x, y, width, height, source) {
        var image = document.createElementNS(svgNameSpace, 'image');
        image.setAttribute('x', x);
        image.setAttribute('y', y);
        image.setAttribute('width', width);
        image.setAttribute('height', height);
        image.setAttribute('xlink:href', source);
        return image;
    }

    svgNameSpace = 'http://www.w3.org/2000/svg';
    svg = document.getElementById('the-svg');

    circle = createCircle(100, 110, 40, '#3e3f37');
    text = createText(20, 120, 'M', '#3e3f37', "30", "bold", "Arial Black");
    svg.appendChild(circle);
    svg.appendChild(text);
    path = createPath('M32 11C31 17.8218 34 28.94 34 39L51 41C50.4266 29.8033 43.5682 12.97 33 8.8z', '#459745', 'none');
    path.setAttribute('transform',"translate(67,80) scale(1,1)");
    svg.appendChild(path);
    path = createPath('M17 41L34 39L34 9C22.3946 14.4126 17.0079 29.0078 17 41z', '#5fb14b', 'none');
    path.setAttribute('transform',"translate(67,80) scale(1,1)");
    svg.appendChild(path);
    
    circle = createCircle(100, 155, 40, '#282827');
    svg.appendChild(circle);
    text = createText(20, 165, 'E', "#282827", "30", "bold", "Arial Black");
    svg.appendChild(text);
    text = createText(65, 156, 'express', "#f8f8f8", "18", "normal", "Consolas");
    svg.appendChild(text);

    circle = createCircle(100, 195, 40, '#e23337');
    svg.appendChild(circle);
    text = createText(20, 205, 'A', "#e23337", "30", "bold", "Arial Black");
    svg.appendChild(text);
    path = createPath('M 5 50 L 0 10 L 30 0 L 60 10 L 55 50', 'none', '#b3b3b3', 3);
    path.setAttribute('transform', "translate(77,175) scale(0.8,0.7)");
    svg.appendChild(path);
    path = createPath('M25 50 L38 10 L38 30 L31 50 Z', '#fff', '#fff', 1);
    path.setAttribute('transform', "translate(74,169) scale(0.7,0.7)");
    svg.appendChild(path);
    path = createPath('M50 50 L37 10 L37 30 L44 50 Z', '#b3b2b2', '#b3b4b4', 1);
    path.setAttribute('transform', "translate(75,169) scale(0.7,0.7)");
    svg.appendChild(path);

    circle = createCircle(100, 240, 40, '#90c53f');
    svg.appendChild(circle);
    text = createText(20, 250, 'N', "#90c53f", "30", "bold", "Arial Black");
    svg.appendChild(text);
    image = createImage(120, 345, 100, 100, "imgs/nodejs_logo_green.png");
    image.setAttribute('transform', 'scale(0.6,0.6)');
    svg.appendChild(image);
}());