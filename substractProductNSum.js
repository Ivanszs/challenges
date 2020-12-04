/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
example:
Input: n = 234
Output: 15
*/
const subtractProductAndSum = function(n) {
  let ns = n.toString();
  let product = 1;
  let sum = 0;
  for (let i = 0; i < ns.length; i++) {
    let numbah = parseInt(ns[i]);
    sum += numbah;
    product *= numbah;
  }
  return product - sum
};
