var slides = [
'<div> here is a div </div> <div> here is a div </div> <div> here is a div </div> <div> here is a div </div>', 
'<h1> this is a header </h1> <p> this is a paragraph </p> <p> this is a paragraph </p> <p> this is a paragraph </p> <p> this is a paragraph </p> <p> this is a paragraph </p> <p> this is a paragraph </p>', 
'<img src=\"imgs/black.jpg\"/> <img src=\"imgs/yellow.jpg\"/> <img src=\"imgs/blue.jpg\"/> <img src=\"imgs/red.jpg\"/>', 
'<form action=\"demo_form.asp\" method=\"get\">  First name: <input type=\"text\" name=\"fname\"><br> Last name: <input type=\"text\" name=\"lname\"><br> <input type=\"submit\" value=\"Submit\"> </form>', 
'<a href=\"http://www.youtube.com/\"> You Tube </a> <a href=\"https://bg.linkedin.com/\"> LinkedIn </a> <a href=\"https://www.facebook.com/\"> Facebook </a> <a href=\"https://www.google.com/\"> Google </a>'
];

(function () {
	var changeSpeed = 5000;
	var active = 0;
	setActiveSlide();

    $("#prev").on('click', getPreviousSlide);
    $("#next").on('click', getNextSlide);

    function getPreviousSlide() {
        active--;
        if(active < 0) {
            active = slides.length;
        }

        setActiveSlide();
        resetTimer();
    }

    function getNextSlide() {
        active++;
        if(active === slides.length - 1) {
            active = 0;
        }

        setActiveSlide();
        resetTimer();
    }

	function setActiveSlide() {
        $("#container").html(slides[active]);
    }

	function resetTimer() {
        clearInterval(timeNextChange);
        timeNextChange = setInterval(getNextSlide, changeSpeed);
    }

    var timeNextChange = setInterval(getNextSlide, changeSpeed);
}());

