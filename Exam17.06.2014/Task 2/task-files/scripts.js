$.fn.gallery = function (imagesPerRow) {
    var $gallery = $(this),
        $clicked,
        previous,
        prev,
        next,
        current;
    $gallery.addClass('gallery');
    var originalGallery = $gallery.find('.gallery-list');
    var selected = $gallery.find('.selected');
    hideSelected();
    var currentImage = selected.find('.current-image').first();
    var prevImage = selected.find('.previous-image').first();
    var nextImage = selected.find('.next-image').first();

    originalGallery.find('.image-container').css('width',(100/(imagesPerRow+1))+ "%" );

    originalGallery.on('click', '.image-container', function () {
        $clicked = $(this);
        setSelectedImages($clicked);
        showSelected();
        originalGallery.addClass('blurred');
        originalGallery.addClass('clearfix');
        selected.addClass('disabled-background');
    });

    currentImage.on('click', function () {
        hideSelected();
        originalGallery.removeClass('blurred');
    });

    prevImage.on('click', function () {
        $clicked = $(this);
        setSelectedImages($clicked);
    });

    nextImage.on('click', function () {
        $clicked = $(this);
        setSelectedImages($clicked);
    });

    function setSelectedImages($current) {
        current = $current.html();

        previous = getPreviousImage($current).html();
        nextImage.attr('src', $current.next().children().last().attr('src'));
        prevImage.attr('src', $current.prev().children().last().attr('src'));
        nextImage.html(next);
        currentImage.html(current);
    }

    function getPreviousImage($current) {
        prev = $current.prev();
        if(!prev) {
            prev = originalGallery.find('div').last();
        }
        return prev;
    }

    function getNextImage($current) {
        next = $current.next();
        if(!next) {
            next = originalGallery.find('div').first();
        }

        return next;
    }

    function hideSelected () {
        selected.hide();
    }

    function showSelected() {
        selected.show();
    }
};