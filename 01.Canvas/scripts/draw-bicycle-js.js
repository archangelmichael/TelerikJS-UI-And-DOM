(function () {
    var canvas = document.getElementById("bicycle-canvas"),
        ctx = canvas.getContext("2d"),
        BIKE_RIM_COLOR = "#90cad7",
        BIKE_FRAME_COLOR = "#347e91";

    //set drawing settings
    ctx.fillStyle = BIKE_RIM_COLOR;
    ctx.strokeStyle = BIKE_FRAME_COLOR;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    // Draw tyres
    ctx.arc(150, 200, 50, 0, 7);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(350, 200, 50, 0, 7);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();

    //Draw frame
    ctx.moveTo(150, 200);
    ctx.lineTo(225, 200);
    ctx.lineTo(330, 130);
    ctx.moveTo(350, 200);
    ctx.lineTo(322, 100);
    ctx.lineTo(280, 110);
    ctx.moveTo(322, 100);
    ctx.lineTo(345, 60);

    ctx.moveTo(330, 130);
    ctx.lineTo(190, 128);
    ctx.lineTo(150, 200);
    
    ctx.moveTo(225, 200);
    ctx.lineTo(180, 110);
    ctx.moveTo(160, 110);
    ctx.lineTo(200, 110);
    ctx.stroke();

    // draw peddals
    ctx.beginPath();
    ctx.arc(225, 200, 10, 0, 7);
    ctx.moveTo(217, 192);
    ctx.lineTo(210, 185);
    ctx.moveTo(232, 208);
    ctx.lineTo(239, 215);
    ctx.stroke();
    ctx.closePath();
})();
