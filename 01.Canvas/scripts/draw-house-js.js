(function () {
    var canvas = document.getElementById("house-canvas");
        ctx = canvas.getContext("2d");
        HOUSE_FILL_COLOR = "#975b5b";
        HOUSE_BORDER_COLOR = "#000";

    //set drawing settigns 
    ctx.fillStyle = HOUSE_FILL_COLOR;
    ctx.strokeStyle = HOUSE_BORDER_COLOR;
    ctx.lineWidth = 3;

    //draw house outlines
    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(200, 450);
    ctx.lineTo(450, 450);
    ctx.lineTo(450, 250);
    ctx.lineTo(200, 250);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(325, 100);
    ctx.lineTo(450, 250);
    ctx.lineTo(200, 250);
    ctx.stroke();
    ctx.fill();

    //draw chimny
    ctx.beginPath();
    ctx.moveTo(380, 220);
    ctx.lineTo(380, 130);
    ctx.lineTo(410, 130);
    ctx.lineTo(410, 220);
    ctx.stroke();
    ctx.lineTo(380, 220);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(380, 130);
    ctx.arcTo(395, 120, 410, 130, 27);
    ctx.arcTo(395, 140, 380, 130, 27);
    ctx.fill();
    ctx.stroke();

    //draw windows
    function createWindow(x, y) {
        ctx.beginPath();
        ctx.fillStyle = HOUSE_BORDER_COLOR;
        ctx.strokeStyle = HOUSE_FILL_COLOR;
        ctx.fillRect(x, y, 100, 70);

        ctx.moveTo(x + 50, y);
        ctx.lineTo(x + 50, y + 70);
        ctx.moveTo(x, y + 35);
        ctx.lineTo(x + 100, y + 35);
        ctx.stroke();
        ctx.closePath();
    }

    createWindow(215, 270);
    createWindow(335, 270);
    createWindow(335, 360);

    //draw doors
    ctx.beginPath();
    ctx.moveTo(295, 450);
    ctx.lineTo(295, 380);

    ctx.moveTo(260, 450);
    ctx.lineTo(260, 365);

    ctx.moveTo(225, 450);
    ctx.lineTo(225, 380);

    ctx.strokeStyle = HOUSE_BORDER_COLOR;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(260, 410, 45, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    //2 * PI = 6.38 = 7
    ctx.arc(250, 425, 3, 0, 7);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(270, 425, 3, 0, 7);
    ctx.stroke();
    ctx.closePath();
})();