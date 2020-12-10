/*
A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
Also, a self-dividing number is not allowed to contain the digit zero.
Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
example:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/
const selfDividingNumbers = function(left, right) {
  let array1 = [];
  for (let i = left; i <= right; i++) {
    let array2 = Array.from(String(i), Number);
    let valid = 0;
    for (let j = 0; j < array2.length; j++) {
      if (i % array2[j] == 0) {
        valid += 1;
      }
    }
    if (valid == array2.length) {
      array1.push(i);
    }
  }
  return array1
};
