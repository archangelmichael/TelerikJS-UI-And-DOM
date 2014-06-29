function createImagesPreviewer(selector, items) {
    var img, i, selectedImage;
    var header = document.createElement('h1');
    var container = document.querySelector(selector);
    container.style.width = '700px';
    var displayImg = document.createElement('div'); // large image display
    displayImg.appendChild(header);

    var docFragment = document.createDocumentFragment();
    docFragment.appendChild(displayImg);

    var sidebar = document.createElement('div'); // contains image selection sidebar
    sidebar.className = 'list';
    sidebar.style.width = '200px';
    sidebar.style.height = '390px';
    sidebar.style.float = 'right';
    sidebar.style.textAlign = 'center';
    sidebar.style.height = '300px';
    docFragment.appendChild(sidebar);

    var inputField = document.createElement('input'); //search field
    inputField.setAttribute('type' , 'text');
    inputField.setAttribute('id', 'search');
    inputField.style.display = 'block';
    inputField.addEventListener('change', showOnlySearchedImages);

    var label = document.createElement('label');
    label.setAttribute('for', 'search'); // attach label to input field
    label.innerText = "Filter";

    var imgsList = document.createElement('ul'); // contains all images available
    imgsList.style.width = '200px';
    imgsList.style.height = '390px';
    imgsList.style.overflowY = 'scroll';
    imgsList.style.overflowX = 'hidden';
    imgsList.style.padding = '0';
    sidebar.appendChild(label);
    sidebar.appendChild(inputField);
    sidebar.appendChild(imgsList);

    var imageLIElement = document.createElement('li'); // contains single image content
    var title = document.createElement('strong'); // contains image title
    var image = document.createElement('img'); // contains image url

    var allImages = createListItems();

    for (i = 0; i < allImages.length; i += 1) {
        var liElement = allImages[i];
        imgsList.appendChild(liElement);

        liElement.addEventListener('click', onImageClick);
        liElement.addEventListener('mouseover', onImageMouseOver);
        liElement.addEventListener('mouseout', onImageMouseOut);
    }

    sidebar.appendChild(imgsList);
    docFragment.appendChild(sidebar);
    container.appendChild(docFragment);

    // set first image as default selection
    selectedImage = document.querySelector('li:first-of-type');
    selectedImage.className = 'current';
    img = image.cloneNode(true);
    displayImg.appendChild(img);
    setSelectedImageStyling(displayImg);
    setCurrent(selectedImage);

    function setCurrent(el) {
        document.querySelector('.list .current').className = '';
        el.className = 'current';
        var src, title;
        title = el.firstChild.innerHTML;
        src = el.lastChild.getAttribute('src');
        header.innerText = title;
        var enlargedImage = document.querySelector('.selected-item img');
        enlargedImage.setAttribute('src', src);
        enlargedImage.style.borderRadius = '15px';
        enlargedImage.style.width = '400px';
        el.className = 'current';
        selectedImage = document.querySelector('.current');
    }

    function createListItems() {
        var images = [];
        for ( var i = 0; i < items.length; i += 1){
            var item = items[i];
            var imageLI = imageLIElement.cloneNode(true);
            var head = title.cloneNode(true);
            img = image.cloneNode(true);
            head.innerHTML = item.title;
            img.setAttribute('src', item.url);
            img.style.width ='100px';
            img.style.borderRadius = '5px';
            head.style.display = 'block';
            imageLI.appendChild(head);
            imageLI.appendChild(img);
            imageLI.style.display = 'inline-block';
            imageLI.style.width = '120px';
            imageLI.style.margin = '0 5px';
            imageLI.style.padding = '5px 0';
            images.push(imageLI);
        }

        return images;
    }

    function onImageMouseOver(ev) {
        if(selectedImage !== this) {
            this.style.background = 'skyblue';
        }
    }

    function onImageMouseOut(ev) {
        if(selectedImage === this) {
            this.style.background = 'skyblue';
        }
        else {
            this.style.background = '';
        }
    }

    function onImageClick(ev) {
        var clickedNode = this;

        if(selectedImage !== clickedNode) {
            selectedImage.style.background = '';
            setCurrent(this);
        }

        clickedNode.style.background = 'skyblue';
    }

    function setSelectedImageStyling(el) {
        el.style.float = 'left';
        //el.style.display = 'inline-block';
        el.style.margin = '5px';
        el.style.padding = '15px';
        el.style.width = '400px';
        el.style.height = '400px';
        el.style.zoom = '1';
        el.style.textAlign = 'center';
        el.style.borderRadius = '15px';
        el.className = 'selected-item';
    }

    function showOnlySearchedImages() {
        var inputText = this.value;
        console.log("implement display only required imgs");
    }
}