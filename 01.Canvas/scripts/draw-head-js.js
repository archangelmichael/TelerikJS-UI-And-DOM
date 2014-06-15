(function () {
	var canvas = document.getElementById("head-canvas"),
		ctx = canvas.getContext("2d"),
		headCx = 88,
		headCy = 164,
		headSize = 74,
		rightEyeX = 100,
		rightEyeY = leftEyeY = 230,
		leftEyeX = 40,
		leftEyeY = 230,
		eyeWidth = 10,
		rightPuipulX = 90,
		leftPuipulX = 30,
		eyePuipulY = 92,
		noseTopX = 70,
		noseTopY = 140,
		noseHeight = 50,
		noseWidth = 15,
		mouthX = 120,
		mouthY = 220,
		hatX = 37;
	    hatY = 10,
	    hatHeight = 77,
	    hatWidth = 87,
		CIRCLE = 2 * Math.PI,
		SKIN_BLUE = "#90cad7",
		PUIPUL_BLUE = "#366a75",
		HAT_BLUE = "#396693";

    //set drawing settings
	ctx.fillStyle = SKIN_BLUE;
	ctx.strokeStyle = PUIPUL_BLUE;
	ctx.translate(50,50);

	//drawing the head
    ctx.lineWidth = 2;
    ctx.beginPath();

    //head
    ctx.arc(headCx, headCy, headSize, CIRCLE, false);
    ctx.fill();
    ctx.stroke();

    //nose
    ctx.moveTo(noseTopX, noseTopY);
    ctx.lineTo(noseTopX - noseWidth, noseTopY + noseHeight);
    ctx.lineTo(noseTopX, noseTopY + noseHeight);
    ctx.stroke();

	//mouth
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.setTransform(1, 0.2, 0, 0.35, 0, 160); // transformin the current context
    ctx.arc(mouthX, mouthY, 25, 0, CIRCLE);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //eyes
    function makeEye(x, y) {
        ctx.save();
        ctx.beginPath();
        ctx.scale(1, 0.6);
        ctx.arc(x, y, 12, 0, CIRCLE);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    function makePuipul(x, y) {
        ctx.save();
        ctx.beginPath();
        ctx.scale(0.5, 1);
        ctx.arc(x, y, 6, 0, CIRCLE);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

	ctx.fillStyle = PUIPUL_BLUE;

	//Right eye
    makeEye(rightEyeX, rightEyeY);
    makePuipul(rightEyeX + rightPuipulX, rightEyeY- eyePuipulY);
    //left eye
    makeEye(leftEyeX, leftEyeY);
    makePuipul(leftEyeX + leftPuipulX, leftEyeY- eyePuipulY);

    //Set hat colors
	ctx.fillStyle = HAT_BLUE;
    ctx.strokeStyle = "#000";

    // bottom ellipse
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.scale(1, 0.2);
    ctx.arc(80, 500, 75, 0, CIRCLE);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    // the rest
    ctx.beginPath();
    ctx.moveTo(hatX, hatY);
    ctx.lineTo(hatX, hatY + hatHeight);
    ctx.arcTo(
    	hatX + hatWidth/2, hatY + hatHeight + 45, 
    	hatX + hatWidth, hatY + hatHeight, 
    	60);
    ctx.lineTo(hatX+hatWidth, hatY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // top ellipse
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.scale(1, 0.4);
    ctx.arc(80, 30, 40, 0, CIRCLE, true);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}());