$('body').append(generateGridView());

function generateGridView() {
    var $grid = $('<div/>'),
        hasHeader = false,

        $table = $('<table/>'),
        $row = $('<tr/>'),
        $cell = $('<td/>'),
        $header = $('<th/>'),

        $firstCellContent = $('<input />').attr('placeholder', 'Enter cell content').attr('type', 'text'),
        $secondCellContent = $firstCellContent.clone(true),
        $thirdCellContent = $firstCellContent.clone(true),
        $addRowBtn = $('<button>').attr('type', 'button').text('Add row');

    var $addHeaderBtn = $addRowBtn.clone(true).text('Add header'),
        $removeHeaderBtn = $addRowBtn.clone(true).text('Remove header'),
        $addGridBtn = $addRowBtn.clone(true).text('Add new grid');

    $grid.addClass('grid')
        .append($firstCellContent)
        .append($secondCellContent)
        .append($thirdCellContent)
        .append($addRowBtn)
        .append($addHeaderBtn)
        .append($removeHeaderBtn)
        .append($addGridBtn)
        .append($table);

    $grid.on('click', '> button:first-of-type', function () {
        debugger;
        var $this = $(this).parent(),
            $newRow = $row.clone(true),
            $cells = $this.find('> input');

        for (var i = 0, len = $cells.length; i < len; i++) {
            var $newCell = $cell.clone(true),
                content = $cells[i].value;

            if (content === '') {
                content = '&nbsp;'
            }

            $newCell.html(content);
            $newRow.append($newCell);
        }

        $this.find('> table:first-of-type').append($newRow);
    });

    $grid.on('click', '> button:nth-of-type(2)', function () {
        if (hasHeader) {
            return;
        }

        var $this = $(this).parent(),
            $firstRow = $row.clone(true),
            $cells = $this.find('> input');


        for (var i = 0, len = $cells.length; i < len; i++) {
            var $newHeader = $header.clone(true),
                content = $cells[i].value;

            if (content === '') {
                content = '&nbsp;'
            }

            $newHeader.append(content);
            $firstRow.append($newHeader);
        }

        $this.find('> table:first-of-type').prepend($firstRow);
        hasHeader = true;
    });

    $grid.on('click', '> button:nth-of-type(3)', function () {
        var $this = $(this).parent();

        if (hasHeader) {
            $this.find('> table:first-of-type').find('tr:first-child').remove();
            hasHeader = false;
        }
    });

    $grid.on('click', '> button:last-of-type', function () {
        var $this = $(this).parent(),
            $newRow = $row.clone(true),
            $newCell = $cell.clone(true),
            $newGrid = generateGridView();

        $newCell.html($newGrid[0]).attr('colspan', 3);
        $newRow.append($newCell);
        $this.find('> table:first-of-type').append($newRow);
    });

    return $grid;
};