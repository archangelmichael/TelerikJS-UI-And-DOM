(function () {
	var inputTag = $("#inputTag").val(),
		inputHtml = $("#inputHtml").val();
	$("#add").on("click", addDivElement);
	$("#remove").on("click", removeDivElement);

	function addDivElement() {
		getInputData();
		if (getCurrentOptionSelected() === "before") {
			$("#default").before($('<' + inputTag + '>').html(inputHtml +" inserted before"));
		}
		else {
			$("#default").after($('<' + inputTag + '>').html(inputHtml +" inserted after"));
		}
	}

	function removeDivElement () {
		getInputData();
		if (getCurrentOptionSelected() === "before") {
			$("#default").prev(inputTag).remove();
		}
		else {
			$("#default").next(inputTag).remove();
		}
  	}
	
  	function getInputData () {
  		var tag = $("#inputTag").val(),
  			html = $("#inputHtml").val();
  		inputTag = tag === "" ? 'div': tag;
  		inputHtml = html === "" ? 'div element': html;
  	}

	function getCurrentOptionSelected () {
		return $("option:selected").attr("value");
	}
	
}());

