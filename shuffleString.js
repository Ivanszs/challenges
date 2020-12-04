/*
Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.
example:
Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"
*/
const restoreString = function(s, indices) {
  let stringArr = s.split("");
  let newStr = [];
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < indices.length; j++) {
      if (i === indices[j]) {
        newStr.push(stringArr[j]);
      }
    }
  }
  return newStr.join('');
};
