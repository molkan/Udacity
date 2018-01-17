function makeGrid() {
	//get the size
	var tableH = $("#input_height").val();
	var tableW = $("#input_width").val();

	//access the table
	var table = $("#pixel_canvas");

	//clear the grid
	table.children().remove();

	//make the rows
	for (var i = 0; i < tableH; i++) {
		table.append("<tr></tr>");
		//make the columns
		for (var j = 0; j < tableW; j++) {
			table.children().last().append("<td></td>");
		}
	}

	table.on("click", "td", function() {
		//get the selected color
		var colorS = $("#colorPicker").val();
		if ($(this).attr("bgcolor") != colorS) {
			$(this).attr("bgcolor", colorS);
		}
		else {
			$(this).attr("bgcolor", "white");
		}
	});
}

//call the makeGrid function when the right input is submitted
$("input[type='submit']").on("click", function(event) {
  event.preventDefault(); //Required to avoid submit and page reload
  makeGrid();
});
