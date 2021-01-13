/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.
example:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
*/
const smallerNumbersThanCurrent = function(nums) {
  let counter = [];
  for (let i = 0; i < nums.length; i++){
    let current = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j] && nums[i] != nums[j]) {
        current++;
      }
    }
    counter.push(current);
  }
  return counter;
};
