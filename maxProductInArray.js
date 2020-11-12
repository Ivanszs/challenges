  
/*
Looks for the maximum product of 2 consecutive numbers that can be
achieved inside an array of numbers
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function(nums) {
  let newNums = [];
  //create a new array with the products of the input array.
  for (let n = 0; n < nums.length; n++) {
    newNums.push(nums[n] * nums[n+1]);
  }
  //take the largest number of the new array.
  let max = newNums[0];
  for (i = 0; i < newNums.length; i++) {
    if (max < newNums[i]) {
      max = newNums[i];
    }
  }
  return max;
};

alert(maxProduct([1,4,5,3,4,34]))
