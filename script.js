'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const pageJump = document.getElementById("pageJump");

const jumpPage = () => {
  open(`https://taniguchi-haruto.github.io/taniguchi-haruto.fnd23/`)
}
pageJump.addEventListener("mousedown", jumpPage);

// 難易度設定
const kind = document.getElementById("kind");
const usually = document.getElementById("usually");
const difficult = document.getElementById("difficult");
// 優しい
let level = "";
const levelSelsect = (elemnet) => {
  level = elemnet.target.id;
}
kind.addEventListener("click", levelSelsect);
// 普通
usually.addEventListener("click", levelSelsect);
// 難しい
difficult.addEventListener("click", levelSelsect);

// ゲーム開始
const clickGame = document.getElementById("clickGame");
const game = document.getElementById("game");
let count = 0;
let gameBut;
let deleteEl;
const gameStrt = () => {
  if (level === "") {
    return;
  } else {
    while (game.firstChild) {
      deleteEl = game.removeChild(game.firstChild);
    }
  }

  gameBut = document.createElement("button");
  gameBut.textContent = "ここを押してね！"
  game.appendChild(gameBut);
  gameBut.setAttribute("id", "strat");
  const strat = document.getElementById("strat");
  let time = document.createElement("h2");
  time.textContent = "30";
  time.setAttribute("id", "time");
  gameBut.before(time);
  strat.addEventListener("click", countDown)

}
console.log(level)
clickGame.addEventListener("click", gameStrt);
const h2 = document.getElementsByTagName("h2");
let timer = 30;
const countDown = () => {
  count++;
  const strat = document.getElementById("strat");
  strat.removeAttribute("id");
  if (level === "kind") {
    gameBut.setAttribute("id", "kindSway");
  } else if (level === "usually") {
    gameBut.setAttribute("id", "usuallySway");

  } else if (level === "difficult") {
    gameBut.setAttribute("id", "difficultSway");
  }
  setInterval(stratGame, 1000);
}
const stratGame = () => {
  const time = document.getElementById("time");
  if (timer === 0) {
    time.textContent = `終了！ 記録は${count}です！`
    return gameBut.setAttribute("id", "sway");
  }
  timer--;
  time.textContent = timer;
}
const sway = document.getElementById("sway");
const reset =()=> {
  while (game.firstChild) {
    deleteEl = game.removeChild(game.firstChild);
  }
}

sway.addEventListener("click", reset);


















