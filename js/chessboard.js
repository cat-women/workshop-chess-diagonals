export default {
  draw,
  highlight
}
var originalBoardEl ;
var size = 10;
var tiles =[] ;

function draw (boardEl) {
  originalBoardEl = boardEl;
  for (let i = 0; i < size; i++) {
    let rowEl = document.createElement('div');
	let rowTiles = [] ;
	tiles.push(rowTiles);

    for (let j = 0; j < size; j++) {
      let tileEl = document.createElement('div');
	  tileEl.dataset.row = i ;
	  tileEl.dataset.col = j;
      rowEl.appendChild(tileEl);

	  rowTiles.push(tileEl)
    }
    boardEl.appendChild(rowEl);
  }

}

function highlight (tileEl) {

	for(let row of tiles){
		for(let el of row){
			el.classList.remove("highlighted");
		}
	}
	if(tileEl){
		let tileRowIndex = Number(tileEl.dataset.row) ;
		let tileColIndex = Number(tileEl.dataset.col) ;

		for(let i = tileRowIndex, j = tileColIndex; i >= 0 && j>= 0; i--, j-- ){
			let el = tiles[i][j];
			el.classList.add("highlighted");
		}

		for(let i = tileRowIndex, j = tileColIndex; i>=0 &&  j <size; i--, j++ ){
			let el = tiles[i][j];
			el.classList.add("highlighted");
		}

		for(let i = tileRowIndex, j = tileColIndex; i < size &&  j>= 0; i++, j-- ){
			let el = tiles[i][j];
			el.classList.add("highlighted");
		}
		for(let i = tileRowIndex, j = tileColIndex; i < size &&  j < size; i++, j++ ){
			let el = tiles[i][j];
			el.classList.add("highlighted");
		}

	}
}
