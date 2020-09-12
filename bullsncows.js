/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  bulls = 0
  cows = 0
  //bulls
  for (b = 0; b < secret.length; b++) {
    if (secret[b] == guess[b]) {
      bulls++;
      //cows--;
    }
  }
  //cows
  //loop in loop to go through the array
  for (let c = 0; c < secret.length; c++) {
    for (let v = 0; v < secret.length; v++) {
      if (secret[c] === guess[v]) {
        cows++;
        {break;}
      }
    }
  }
    
  return bulls + 'A' + cows + 'B'
};
