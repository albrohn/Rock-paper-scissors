const ps = getps();
const cs = getcs();
alert(playround(ps, cs));

function playround(ps, cs) {
  if (ps === cs) {
    alert("Draw!!");
  } else if (
    (ps === "rock" && cs === "scissors") ||
    (ps === "paper" && cs === "rock") ||
    (ps === "scissors" && cs === "paper")
  ) {
    alert(`You win!! ${ps} beats ${cs}`);
  } else if (
    (cs === "rock" && ps === "scissors") ||
    (cs === "paper" && ps === "rock") ||
    (cs === "scissors" && ps === "paper")
  ) {
    alert(`You lose!! ${cs} beats ${ps}`);
  }
}

function getps() {
  let getps = prompt("Choose rock, paper, or scissors");
  return getps;
}

function getcs() {
  let getcs = Math.ceil(Math.random() * 3);
  if (getcs === 1) {
    getcs = "rock";
  } else if (getcs === 2) {
    getcs = "paper";
  } else {
    getcs = "scissors";
  }
  return getcs;
}
