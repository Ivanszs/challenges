/*
Given a word, you need to judge whether the usage of capitals in it is right or not.
We define the usage of capitals in a word to be right when one of the following cases holds:
All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
example:
Input: "FlaG"
Output: False
*/
const detectCapitalUse = function(word) {
  let detect = 0;
  let forcedCapital = word.toUpperCase();
  let forcedLow = word.toLowerCase();
  let firstCap = forcedLow.charAt(0).toUpperCase() + forcedLow.slice(1);
  console.log(firstCap)
  if (word == forcedCapital) {
    detect +=1;
  } else if (word == forcedLow)  {
    detect +=1;
  } else if (firstCap == word) {
    detect +=1;
  }
  return detect > 0 ? true: false;
};
