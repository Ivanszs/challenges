/*
Given two arrays of integers nums and index. Your task is to create target array under the following rules:
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array
example:
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
*/
const createTargetArray = function(nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
   target.splice(index[i], 0, nums[i]);
  }
  return target
};
