(function ($) {
    $.fn.getMessage = function () {
        var $this = $(this);
        return {
            success : function(message){
                $this.each(function () {
                    $this.css('background-color', 'green');
                    $this.animate({ 'opacity': 1 }, 1000);
                    $(this).html(message);
                    setInterval(function () { $this.animate({ 'opacity': 0 }, 1000); }, 3000);
                });
                return $this;
            },
            error : function(message){
                $this.each(function () {
                    $this.css('background-color', 'red');
                    $this.animate({ 'opacity': 1 }, 1000);
                    $(this).html(message);
                    setInterval(function () { $this.animate({ 'opacity': 0 }, 1000); }, 3000);
                });
                return $this;
            }
        };
    }
}(jQuery));

$('#show-success').on('click', function () {
    $('#message-box').getMessage()
    .success('Success message');
});

$('#show-error').on('click', function () {
    $('#message-box').getMessage()
    .error('Error message');
});
