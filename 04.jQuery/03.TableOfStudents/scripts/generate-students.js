( function () {
    var $table = $('<table>')
        .appendTo('#container');
    var $thead = $('<thead>').appendTo($table),
        $tr = $('<tr>').appendTo($thead),
        obj,
        i,
        $stInfo,
        $tbody;

    $.each( students[0], function( key, value ) {
        $tr.append($('<th>').text(key.toUpperCase()));
    });

    $tbody = $('<tbody>').appendTo($table);

    for (i=0; i<students.length;i+=1){
        obj = students[i];
        $stInfo = $('<tr>');
        $.each( obj, function( key, value ) {
            $stInfo.append($('<td>').text(value));
        });
        $stInfo.appendTo($tbody);
    }
}());
