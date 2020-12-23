/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
example:
Input: arr = [2,6,4,1]
Output: false
*/
const threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      if (arr[i + 1] && arr[i + 1] % 2 != 0) {
        if (arr[i + 2] && arr[i + 2] % 2 != 0) {
          return true;
        } else {
          i += 2;
        }
      } else {
        i++;
      }
    }
  }
  return false;
};
