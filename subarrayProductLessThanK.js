/* not working
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let lessThanK = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentProduct = nums[i];
    for (let j = i; j < nums.length; j++) {
      if (i === j && nums[i] < k) {
        lessThanK++; /* fix these else-if logic ._.*/
      } else {
      currentProduct *= nums[k]; }
      if (currentProduct < k) {
        lessThanK++;
      }
      //product of current index and currentProduct and compare it in each loop
    }
  }
  return lessThanK
};
