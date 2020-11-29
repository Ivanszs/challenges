const isPalindrome = function(x) {
  
  let forwardX = (""+x).split("");
  let backwardX = [];
  for (let i = forwardX.length-1; i >= 0; i--){
    backwardX.push(forwardX[i])
  }
  forwardX = forwardX.join();
  backwardX = backwardX.join();
  if (forwardX == backwardX) {
    return true;
  } else {
    return false;
  }
};
