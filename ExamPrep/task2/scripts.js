$.fn.tabs = function () {
    var $this = $(this);
    $this.addClass('tabs-container');
    $this.find('.tab-item-content').hide();

    $this.on('click', '.tab-item-title', function () {
        var $clicked = $(this);
        $this.find('.tab-item-content').hide();
        $this.find('.tab-item').removeClass('current');
        $clicked.next().show();
        $clicked.parent().addClass('current');
    })


};