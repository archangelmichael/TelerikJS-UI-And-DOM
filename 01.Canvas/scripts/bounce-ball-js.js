(function () {
	var canvas = document.getElementById("bounce-canvas"),
		ctx = canvas.getContext("2d"),
		BALL_COLOR = "#05f933",
		BALL_BORDER = "#0510f9",
		fieldWidth = ctx.canvas.width,
		fieldHeight = ctx.canvas.height,
		goRight = true;
		goDown = true;
		positionX = fieldWidth / 2;
        positionY = fieldHeight / 2;
		ballRadius = 10;
        ballSpeed = 5;

    function drawBall() {
        ctx.beginPath();
        ctx.fillStyle = BALL_COLOR;
        ctx.strokeStyle = BALL_BORDER;
        ctx.moveTo(positionX, positionY);
        ctx.arc(positionX, positionY, ballRadius, 0, 7);
        ctx.fill();
        ctx.stroke();
    }

    function updateDirections() {
        if (goRight) {
            positionX += ballSpeed;
            if (positionX + ballRadius > fieldWidth) {
                goRight = false;
                positionX -= 2 * ballSpeed;
            }
        }
        else if (!goRight) {
            positionX -= ballSpeed;
            if (positionX - ballRadius < 0) {
                goRight = true;
                positionX += 2 * ballSpeed;
            }
        }

        if (goDown) {
            positionY += ballSpeed;
            if (positionY + ballRadius > fieldHeight) {
                goDown = false;
                positionY -= 2 * ballSpeed;
            }
        }
        else if (!goDown) {
            positionY -= ballSpeed;
            if (positionY - ballRadius < 0) {
                goDown = true;;
                positionY += 2 * ballSpeed;
            }
        }
    }

    function moveBall() {
        ctx.clearRect(0, 0, fieldWidth, fieldHeight);
        updateDirections();
        drawBall();
    }

    setInterval(moveBall, 10);
})();