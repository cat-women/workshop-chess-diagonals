import Chessboard from "./chessboard.js";

console.log("here")

document.addEventListener("DOMContentLoaded",async function ready(){
	console.log("here")

	var boardEl = document.getElementById("board");
	var clearHighlightsBtn = document.getElementById("clear-highlights-btn");
	Chessboard.draw(boardEl);

	boardEl.addEventListener("click",onClickTile,false);
	clearHighlightsBtn.addEventListener("click",clearHighlights,false);


	// ********************************

	function onClickTile(evt) {
		var clickedEl = evt.target;

		// clicked on a board tile?
		if (clickedEl.matches("#board > div > div")) {
			Chessboard.highlight(clickedEl);
		}
		else {
			clearHighlights();
		}
	}

	function clearHighlights() {
		Chessboard.highlight();
	}

});
