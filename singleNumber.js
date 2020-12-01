/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Example:
Input: nums = [4,1,2,1,2]
Output: 4
*/
const singleNumber = function(nums) {
  lonelyNum = 0;
  let narr = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i+1]) {
      i++;
    } else if (nums[i] != nums[i+1]) {
      lonelyNum += nums[i];
    }
  }
  return lonelyNum;
};
