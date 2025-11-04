document.getElementById("board").addEventListener("click", function (event) {
   let cell = event.target.closest("td");
   if (!cell) return;

   let x = cell.cellIndex;
   let y = cell.parentElement.rowIndex;

   if (isValidMove(x, y, currentTurn)) {
      placePiece(x, y, currentTurn);
      updateBoard();
      changeTurn();
      checkPass();
   } else {
      console.log("そこには置けません");
   }

});

function handleMouseEnter(event) {
   let cell = event.target;
   let x = cell.cellIndex;
   let y = cell.parentElement.rowIndex;

   if (isValidMove(x, y, currentTurn)) {
      cell.classList.add("hint"); // CSSでヒントのスタイル適用
   }
}

function handleMouseLeave(event) {
   event.target.classList.remove("hint"); // マウスが離れたら削除
}

function enableMoveHints() {
   document.querySelectorAll("#board td").forEach(cell => {
      cell.addEventListener("mouseenter", handleMouseEnter);
      cell.addEventListener("mouseleave", handleMouseLeave);
   });
}

// リセットボタンにイベントリスナーをセット
document.getElementById("reset-button").addEventListener("click", resetGame);

document.addEventListener("DOMContentLoaded", () => {
   createBoardHTML();   // UI に反映
   initializeBoard();  // 盤面のデータをセット
   updateBoard();
   updateTurnDisplay();
});

document.addEventListener("DOMContentLoaded", () => {
   enableMoveHints(); // ヒント機能を有効化
});


const menuScreen = document.getElementById('menu-screen');
const menuButton = document.getElementById('menu');
const backButton = document.getElementById('back');

menuButton.addEventListener('click', () => {
    menuScreen.style.display = 'flex';
})

backButton.addEventListener('click', () => {
    menuScreen.style.display = 'none';
})
