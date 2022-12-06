const nameEl1 = document.querySelector("#name-1");
const nameEl2 = document.querySelector("#name-2");
const playButton = document.querySelector(".play-btn");
const percentBox = document.querySelector(".percent-box");
const statementBox = document.querySelector(".statement-box");

function loveOutput() {
  const name1 = nameEl1.value;
  const name2 = nameEl2.value;
  if (name1.length < 3) {
    statementBox.innerText = `Please enter atleast 3 letters.`;
  }
  if (name2.length < 3) {
    statementBox.innerText = `Please enter atleast 3 letters`;
  } else {
    const percentage = lovePercentage(name1, name2);
    percentBox.innerText = `${name1} and ${name2}'s love percentage is ${percentage}%.`;
    if (percentage >= 0 && percentage < 20) {
      statementBox.innerText = `The relationship is very bad. 🥲`;
    } else if (percentage >= 20 && percentage <= 50) {
      statementBox.innerText = `The relationship is okayish. 😶 `;
    } else if (percentage >= 51 && percentage <= 70) {
      statementBox.innerText = `The relationship is good!😊`;
    } else {
      statementBox.innerText = `The relationship is great!! 😍😘`;
    }
  }
}

function lovePercentage(a, b) {
  const random = Math.trunc(Math.random() * 100 + 1);
  return random;
}

playButton.addEventListener("click", loveOutput);
