/*
Given two strings s and t , write a function to determine if t is an anagram of s.
You may assume the string contains only lowercase alphabets.
example:
Input: s = "anagram", t = "nagaram"
Output: true
*/
const isAnagram = function(s, t) {
  if (s == "") { return true }
  let sSorted = s.split('').sort().join('');
  let tSorted = t.split('').sort().join('');
  return sSorted == tSorted ? true: false
};
