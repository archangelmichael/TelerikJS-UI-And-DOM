(function () {
    $('input').on('change', changeBackground);
})();

function changeBackground() {
    color = $('input').val();
    $('body').css("background", color );
}

