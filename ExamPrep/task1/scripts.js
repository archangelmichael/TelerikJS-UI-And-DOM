function createCalendar(selector, data) {
    var DAYS_OF_MONTH = 30,
        i;
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var container = document.querySelector(selector);
    var dayBox = document.createElement('div');
    var dayBoxTitle = document.createElement('strong');
    var dayBoxContent = document.createElement('div');
    dayBoxContent.innerHTML = '&nbsp';

    container.style.width = (130 * 7.5) + 'px';

    dayBox.style.margin = '0';
    dayBox.style.padding = '0';
    dayBox.style.border = '1px solid blue';
    dayBox.style.width = '130px';
    dayBox.style.height = '120px';
    dayBox.style.display = 'inline-block';

    dayBoxTitle.style.display = 'block';
    dayBoxTitle.style.background = 'skyblue';
    dayBoxTitle.style.textAlign = 'center';
    dayBoxTitle.style.borderBottom = '1px solid blue';

    dayBoxTitle.className = 'day-title';
    dayBoxContent.className = 'day-content';
    dayBox.appendChild(dayBoxTitle);
    dayBox.appendChild(dayBoxContent);

    function createMonthBoxes() {
        var dayBoxes = [];
        for (i = 0; i < DAYS_OF_MONTH; i+=1){
            var dayOfWeek = daysOfWeek[i%daysOfWeek.length];
            dayBoxTitle.innerHTML = dayOfWeek + ' ' + (i + 1) + ' June 2014';
            dayBoxes.push(dayBox.cloneNode(true));
        }
        return dayBoxes;
    }

    function addEvents( boxes, events) {
        for (i = 0; i < boxes.length; i += 1) {
            var event = events[i];
            var content = boxes[event.date - 1].querySelector('.day-content');
            content.innerHTML = event.hour + ' ' + event.title;
        }
    }

    function onBoxMouseOver(ev) {
        if(selectedBox !== this) {
            this.style.background = 'green';
        }
    }

    function onBoxMouseOut(ev) {
        //if(selectedBox !== this) {
            this.style.backgorund = '';
        //}
    }

    var selectedBox = null;
    function onBoxClick(ev) {
        var clickedNode = this;
        //resetStyles();
        if(selectedBox) {
            selectedBox.style.background = '';
        }
        if (selectedBox && selectedBox === clickedNode) {
            selectedBox = null;
        }
        else {
            clickedNode.style.background = 'yellow';
            selectedBox = clickedNode;
        }
    }

//    function resetStyles() {
//        for (i = 0; i < boxes.length; i += 1) {
//            boxes[i].style.background = '';
//        }
//    }

    var docFragment = document.createDocumentFragment();

    var boxes = createMonthBoxes();
    for (i = 0; i < boxes.length; i+=1) {
        docFragment.appendChild((boxes[i]));
        boxes[i].addEventListener('click', onBoxClick);
        boxes[i].addEventListener('mouseover', onBoxMouseOver);
        boxes[i].addEventListener('mouseout', onBoxMouseOut);
    }

    container.appendChild(docFragment);

    addEvents(boxes, events);
}