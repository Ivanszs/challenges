/*
Given two arrays, write a function to compute their intersection.
Each element in the result must be unique.
The result can be in any order.
example:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/
const intersection = function(nums1, nums2) {
  let arr = [];
  for (let i=0; i<nums1.length; i++) {
    for (let j=0; j<nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        arr.push(nums1[i]);
      }
    }
  }
  return [...new Set(arr)]
};
