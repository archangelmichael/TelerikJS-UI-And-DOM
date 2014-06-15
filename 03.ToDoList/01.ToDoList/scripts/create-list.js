function createList() {
    var container = document.getElementById('list-container'),
        createItemButton = document.createElement('button');
    createItemButton.innerHTML = 'Create item';
    container.appendChild(createItemButton);

    var showHideButton = document.createElement('button');
    showHideButton.innerHTML = 'Show/hide';
    container.appendChild(showHideButton);

    var newInput = document.createElement('input');
    newInput.style.width = '800px';

    var addItemButton = document.createElement('button');
    addItemButton.innerHTML = 'Add item';
    
    var newInputContainer = document.createElement('div');
    newInputContainer.appendChild(newInput);
    newInputContainer.appendChild(addItemButton);
    newInputContainer.style.display = 'none';
    container.appendChild(newInputContainer);

    var itemsContainer = document.createElement('div');
    itemsContainer.id = 'items-container';
    itemsContainer.style.width = '800px';
    itemsContainer.style.minHeight = '55px';
    itemsContainer.style.display = 'block';
    itemsContainer.style.border = '1px solid black';
    container.appendChild(itemsContainer);

    createItemButton.addEventListener('click', function () {
        if (newInputContainer.style.display === 'block') {
            newInputContainer.style.display = 'none';
        }
        else {
            newInputContainer.style.display = 'block';
        }
    }, false);

    showHideButton.addEventListener('click', function () {
        if (itemsContainer.style.display === 'block') {
            itemsContainer.style.display = 'none';
        }
        else {
            itemsContainer.style.display = 'block';
        }
    }, false);

    addItemButton.addEventListener('click', updateList, false);

    function updateList() {
        if (newInput.value === "") {
            return;
        }

        var currentDiv = document.createElement('div');
        var removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';

        removeButton.addEventListener('click', function () {
            itemsContainer.removeChild(this.parentElement);
        }, false);

        currentDiv.appendChild(removeButton);

        var currentText = document.createElement('span');
        currentText.innerHTML = newInput.value;
        newInput.value = "";
        currentText.style.marginLeft = '15px';
        currentDiv.appendChild(currentText);
        itemsContainer.appendChild(currentDiv);
    }
}