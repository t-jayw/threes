/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var diceLeft;
var score = 0;
var roll1 = new Array ();
var chosen;
var yourDice = Array ();

function xIsInY(x, y) {
   var xIsInY = false;
   for(var propertyName in y) {
      if(x == y[propertyName]) {
         xIsInY = true;
         break;
      }
   }
   return xIsInY;
}

userSelectVerify = function (arrayX, arrayY) { 
    if (length.arrayX == 0) 
    {
        return false;
    }        
    else 
    {     
        for (var choice in arrayX) {
            var verified = true;
            if (!xIsInY(arrayX[choice], arrayY)) {
                verified = false;
                break;
            }
        } 
    }
    return verified;
    };

userSelect = function () {
    var userString = 
        prompt("which would you like to keep?");
    var aUserString = userString.split(/[\s,]+/);
    return aUserString;       
    };
    
userScore = function(arrayDice) {
    var runningScore;
    for (var dots in yourDice) {
        if (dots = 3) {
            runningScore;
        } else {
            runningScore += dots;
        }
    }
    return runningScore;
}


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

rollDice = function() {
    if (!diceLeft) {
        diceLeft = 6;
    };
    var i;
    for (i=0; i < diceLeft; i++) {
    dice = Math.floor(Math.random()*6+1);
  roll1.push(dice);    
	}
};

printRoll = function() {
    
    document.write("<h1>first roll:</h1>");

    for (counter=0; counter < roll1.length; counter++)
    {
    document.write("<body.die>" + roll1[counter] + "</body.die><br>");
    };
    
};

userSelect = function() {
    
}



