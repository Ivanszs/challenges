/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.
example:
Input: nums = [1,2,3,1,1,3]
Output: 4
*/
const numIdenticalPairs = function(nums) {
  counter = 0;
  for (let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter++;
      }
    }
  }
  return counter;
};
