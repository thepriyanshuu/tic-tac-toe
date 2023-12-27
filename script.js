let buttons = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let turnO = true;
let msg = document.querySelector('.msg');

const winningPatters = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else{
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

const restartGame = () => {
  enableBtn()
}

const disabelBtn = () => {
  for(let btns of buttons){
    btns.disabled = true;
  }
}
const enableBtn = () => {
  for(let btns of buttons){
    btns.disabled = false;
    btns.innerText = '';
    msg.classList.add('hide')
    
  }
}

const showWinner = (winner) => {
  msg.innerHTML = `Congrats, player ${winner} won!`;
  msg.classList.remove('hide')
}

function checkWinner() {
  for (pattern of winningPatters){

    let pos1 = buttons[pattern[0]].innerHTML;
    let pos2 = buttons[pattern[1]].innerHTML; 
    let pos3 = buttons[pattern[2]].innerHTML;
    
    if(pos1 !== '' && pos1 === pos2 && pos2 === pos3){
      disabelBtn();
      showWinner(pos1);
      
    }
}
}

resetBtn.addEventListener('click', restartGame);
