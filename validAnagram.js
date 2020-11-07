/*given 2 strings, return true if they are an anagram, meaning, same amount of characters
but different order.
ex: Input: s = "anagram", t = "nagaram"
Output: true */
let isAnagram = function(s, t) {
//if case input is wrong
  if (s.length != t.length) {
    return false;
  }
//if input is the same
  if (s === t) {
    return true;
  }
//empty array to store each character and compare it later
  let nStr = [];
//empty array to log the iteration number of already checked characters so they don´t repeat
  let dNum = [];
  for (k = 0; k < s.length; k++) {
    for (i = 0; i < s.length; i++) {
      if (s.charAt(k) === t.charAt(i) && dNum.includes(i) == false) {
        nStr.push(s.charAt(k));
        dNum.push(i); /*pushes iteration number in an array to compare it at the start of this if statement */
        break;
      }
    }
  }
// make a string out of nStr and compare to the original
  let nnStr = nStr.join('');
  if (nnStr === s) {
    return true;
  } else {
    return false;
  }
};
isAnagram(papopepo,pepopapo
  )