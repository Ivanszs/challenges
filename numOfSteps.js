/*
Given a non-negative integer num, return the number of steps to reduce it to zero. 
If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
example:
Input: num = 14
Output: 6
*/
const numberOfSteps = function(num) {
  let counter = 0;
  while (num > 0) {
    if (num % 2 == 0) {
      counter++;
      num /= 2;
    } else if (num % 2 != 0) {
      counter ++;
      num--;
    }
  }
  return counter;
};
