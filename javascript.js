var diceLeft = 6;
var diceArray = new Array;
var diceChosen = new Array;
var numRolls = 0;
var gameScore = 0;
var hasPicked = true;

rollDice = function() {
  if (gameOver()) {
    alert("game over");
  }
  else if (!hasPicked) {
    alert("must choose at least one!")
  }
  else {
      hasPicked = false;
      var i;
      for (i = 0; i < 6; i++) {
          if (diceArray[i] !== 'X') {
            diceArray[i] = (Math.floor(Math.random()*6) + 1);   
            }
          else {
            diceArray[i] = diceArray[i];
          }   
      } 
      numRolls++;

      showRoll(diceArray);    
      updateHeader();
    }

}

pickDice = function(x) {
  if ( diceArray[x] == 'X') {
    alert ("you've chosen this already!");
  }
  else {
      diceChosen += diceArray[x];
      diceLeft--;
      gameScore += calcScore(diceArray[x]);
      diceArray[x] = 'X';
      showRoll(diceArray);
      showRoll(diceChosen, 'chosen');
      updateHeader();
      hasPicked = true;
    }
}

showRoll = function(x, type) {
    if (type !== 'chosen') {
        document.getElementById('dr_1').innerHTML = x[0];
        document.getElementById('dr_2').innerHTML = x[1];
        document.getElementById('dr_3').innerHTML = x[2];
        document.getElementById('dr_4').innerHTML = x[3];
        document.getElementById('dr_5').innerHTML = x[4];
        document.getElementById('dr_6').innerHTML = x[5];
   }
   else {
        document.getElementById('chosen_0').innerHTML = x[0];
        document.getElementById('chosen_1').innerHTML = x[1];
        document.getElementById('chosen_2').innerHTML = x[2];
        document.getElementById('chosen_3').innerHTML = x[3];
        document.getElementById('chosen_4').innerHTML = x[4];
        document.getElementById('chosen_5').innerHTML = x[5];
   }
};
updateHeader = function() {
    document.getElementById('dice_rolled').innerHTML = 'Rolls: '+ 
      numRolls + '||';
    document.getElementById('dice_left').innerHTML = 'Left: '+
      diceLeft + '||';
    document.getElementById('game_score').innerHTML = 'Score: '+
      gameScore + '||';
}

calcScore = function(dieval) {
  roll = dieval;
  val = 0;
  if (dieval == 3 || typeof dieval !== 'number') {
    val += 0;
  }
  else {
    val += dieval;
  }
  return val;
}

gameOver = function() {
  if (diceLeft == 0 || numRolls >= 6) {
    return true;
  }
  else {
    return false;
  }

}
