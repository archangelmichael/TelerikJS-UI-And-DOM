window.onload = function () {
    document.getElementById("test").addEventListener("click", function () {
        var testData = getTestData();
        vizualizeData(testData);
    });

    document.getElementById("vizualize").addEventListener("click", function () {
        var inputData = getInputData();
        vizualizeData(inputData);
    });
};

function getTestData() {
    return ["cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "wordpress", "xaml", "js", "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript", "http", "http", "CMS"];
}

function getInputData() {
    var textInput = document.getElementById("input").innerHTML;
    input = textInput.split(',');
    for (var i in input) {
        input[i] = input[i].trim();
    }

    return input;
}

function getResizedText(text, reps, step) {
    var span = document.createElement('span');
    span.style.margin = "20px";
    span.innerHTML = text;
    span.style.fontSize = (10 + reps * step) + "px";
    console.log(span);
    return span;
}

function vizualizeData(data) {
    var nameCounts = {},
        output = document.getElementById("output"),
        i,
        name,
        maxFontSize = 42,
        minFontSize = 17;

    for (i = 0; i < data.length; i++) {
        name = data[i];
        if(nameCounts[name]) {
            nameCounts[name]++;
        }
        else {
            nameCounts[name] = 1;
        }
    }
    
    var minCount = Number(nameCounts[data[0]]),
        maxCount = Number(nameCounts[data[0]]);
    
    for (i in nameCounts) {
        name = data[i];
        if (Number(nameCounts[i]) > maxCount) {
            maxCount = Number(nameCounts[i]);
        }
        if (Number(nameCounts[i]) < minCount) {
            minCount = Number(nameCounts[i]);
        }
    }

    var allFontsCount = maxCount - minCount,
        fontDifference = maxFontSize - minFontSize,
        oneStep = fontDifference / allFontsCount;

    for (var i in nameCounts) {
        output.appendChild(getResizedText(i, nameCounts[i], oneStep));
    }
}