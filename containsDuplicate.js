/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
example:
Input: [1,2,3,1]
Output: true
*/
//this first one works pretty fast but does not pass all test cases
/*
const containsDuplicate = function(nums) {
if (nums.length === 0 || nums.length === 1) {
    return false
  }
  return nums.every(x => nums[x] != nums[x+1])
};
*/
const containsDuplicate = function(nums) {
  let counter = 0;
  if (nums.length === 0 || nums.length === 1) {
    return false
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter += 1;
      }
    }
  }
  if (counter != 0) {return true} else {return false}
};
