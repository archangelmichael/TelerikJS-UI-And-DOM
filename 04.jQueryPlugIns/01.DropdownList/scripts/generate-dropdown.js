(function ($) {
    $.fn.dropdown = function () {
        var $this = $(this);
        $this.hide();

        var $dropdownContainer = $('<div></div>').addClass('dropdown-list-container');
        var $ul = $('<ul></ul>').addClass('dropdown-list-options');
        var $options = $this.find('option'),
            i, data, selector, $selected;

        for (i = 0; i < $options.length; i++) {
            var $currentOption = $options[i];
            var currentOptionValue = $currentOption.value;
            var currentOptionText = $currentOption.innerHTML;
            var $generatedLI = $('<li></li>')
                .addClass('dropdown-list-option')
                .html(currentOptionText)
                .data('data-value', currentOptionValue);
            $ul.append($generatedLI);
        }

        $dropdownContainer.append($ul);
        $this.after($dropdownContainer);

        $(".dropdown-list-option").on("click", function () {
            data = $(this).data('data-value');
            selector = 'option[value=\'' + data + '\']';
            $selected = $('#dropdown').find(selector);
            if ($selected.attr('selected') == 'selected') {
                $selected.removeAttr('selected', '');
                $(this).css('background-color', 'grey')
            }
            else {
                $selected.attr('selected', 'selected');
                $(this).css('background-color', 'green')
            }
        });

        return $this;
    }
}(jQuery));

$('#dropdown').dropdown();
