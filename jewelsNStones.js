/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels
examples:
Input: J = "aA", S = "aAAbbbb"
Output: 3
Input: J = "z", S = "ZZ"
Output: 0
*/
const numJewelsInStones = function(J, S) {
  jewels = 0;
  for (let i = 0; i < J.length; i++) {
    for(let k = 0; k < S.length; k++) {
      if (J.charAt(i) == S.charAt(k)) {
        jewels++;
      }
    }
  }
  return jewels;
};
