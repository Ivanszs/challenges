/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
example:
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/
const sortArrayByParity = function(A) {
  let sorted = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      sorted.push(A[i]);
    }
  }
  for (let j = 0; j < A.length; j++) {
    if (A[j] % 2 != 0) {
      sorted.push(A[j]);
    }
  }
  return sorted
};
