/*returns indexes of 2 numbers that summed are equal to the target parameter*/
let twoSum = function(nums, target) {
  output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let k = i+1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        output.push(i, k);
      }
    }
  }
return output;
};