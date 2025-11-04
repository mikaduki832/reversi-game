// 効果音

function playSound(src) {
   const audio = new Audio(src);
   audio.play();
}

function updateTurnDisplay() {
   document.getElementById("turn-info").textContent = getTurnSymbol(currentTurn) + " のターンです";
}

const difficultyIndicator = document.getElementById('indicator');

const changeDifficulty = () => {
   if (easySwitch === true) {
      difficultyIndicator.textContent = 'Easy';
   } else if (normalSwitch === true) {
      difficultyIndicator.textContent = 'Normal';
   } else if (hardSwitch === true) {
      difficultyIndicator.textContent = 'Hard';
   };
   menuScreen.style.display = 'none';
   resetGame();
}

function getTurnSymbol(color) {
    return color === "b" ? "⚫" : "⚪";
}

function getWinner() {
   const { blackCount, whiteCount } = countStones();

   if (blackCount > whiteCount) {
      return `⚫ ${blackCount} 対 ⚪ ${whiteCount} で ⚫ の勝ちです`;
   } else if (whiteCount > blackCount) {
      return `⚫ ${blackCount} 対 ⚪ ${whiteCount} で ⚪ の勝ちです`;
   } else {
      return `⚫ ${blackCount} 対 ⚪ ${whiteCount} で 引き分けです`;
   }
}

function endGame() {
   const resultMessage = getWinner(); // getWinner() を呼び出して勝敗を取得
   const turnInfo = document.getElementById("turn-info");
   turnInfo.innerHTML = resultMessage; // 結果を turn-info に表示
}
