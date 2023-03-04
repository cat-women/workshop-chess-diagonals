export default {
  draw,
  highlight
}
var originalBoardEl

function draw (boardEl) {
	console.log("here")
  originalBoardEl = boardEl
  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement('div')
    for (let j = 0; j < 9; j++) {
      let rowEl = document.createElement('div')
      rowEl.appendChild(tileEl)
    }
    boardEl.appendChild(rowEl)
  }
}

function highlight (tileEl) {}
