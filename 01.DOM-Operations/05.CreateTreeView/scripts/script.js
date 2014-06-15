function createTreeView() {
    var liElements = document.getElementsByTagName('li'),
        i,
        length = liElements.length;

    for (i = 0; i < length; i++) {

        // hide all childs
        var child = liElements[i].firstElementChild;
        while (child) {
            child.style.display = 'none';
            child = child.nextElementSibling;
        }
        
        //setting the onclickFunction
        liElements[i].onclick = function (event) {
            if (this.className != "selected") {
                this.setAttribute("class", "selected");
            }
            else {
                this.removeAttribute("class");
            }

            event.stopPropagation();
            var currChild = this.firstElementChild;
            while (currChild) {
                if (currChild.style.display == 'none') {
                    currChild.style.display = 'block';
                }
                else {
                    currChild.style.display = 'none';
                }

                currChild = currChild.nextElementSibling;
            }
        };
    }
}