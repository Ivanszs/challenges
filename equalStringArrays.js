/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
example:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
*/
const arrayStringsAreEqual = function(word1, word2) {
  let stringOne = word1.toString();
  stringOne = stringOne.replace(/,/g, "");
  let stringTwo = word2.toString();
  stringTwo = stringTwo.replace(/,/g, "");
  return stringOne === stringTwo ? true: false;
};
