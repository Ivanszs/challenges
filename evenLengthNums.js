/*I extracted the 'let current' logic from stackoverflow.

Given an array nums of integers, return how many of them contain an even number of digits.
example:
Input: nums = [12,345,2,6,7896]
Output: 2
*/
const findNumbers = function(nums) {
  counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = Math.ceil(Math.log10(nums[i] + 1));
    if (current % 2 === 0) {
      counter++;
    }
  }
  return counter;
};
