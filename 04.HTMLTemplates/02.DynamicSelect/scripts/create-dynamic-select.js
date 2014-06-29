var items = [{
    value: 1,
    text: 'One'
}, {
    value: 2,
    text: 'Two'
}];

var selectTemplate = Handlebars.compile(document.getElementById('select-template').innerHTML);
var selectHTML = selectTemplate({items:items});
document.getElementById("select-container").innerHTML = selectHTML;