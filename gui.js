
document.getElementById("rockbtn").addEventListener("click", function(){
  playGame('Rock');
});

document.getElementById("paperbtn").addEventListener("click", function(){
  playGame('Paper');
});

document.getElementById("scissorbtn").addEventListener("click", function(){
  playGame('Scissors');
});

document.getElementById("shootbtn").addEventListener("click", function(){
  displayWinner('Shoot');
});
