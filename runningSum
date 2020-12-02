/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
example:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
*/
const runningSum = function(nums) {
  let sums = [nums[0]];
  for (let i = 0; i < nums.length-1; i++) {
    sums.push(sums[i] + nums[i+1]);
  }
  return sums;
