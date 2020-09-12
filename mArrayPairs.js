/*all numbers in an array get multiplied.
2 at a time.
example input [a, b, c, d]
order will be: a*b, b*c, c*d
function returns the highest number between these.

argument must be an array
returns a number*/

let maxProduct = function(nums) {
  
  //for 1 number arrays
  if (nums[1] === undefined) {
    return nums[0];
  }
  
  let newNums = [];
  
  //loop that makes a new array with the products.
  
  for (i = 0; i < nums.length; i++) {
    newNums.push(nums[i] * nums[i+1]);
  }
  
  let higher = newNums[0];
  //loop through newNums, compare 2 numbers, assign the higher number to a let var.
  for (n = 0; n < newNums.length; n++) {
    if (higher < newNums[n]) {
      higher = newNums[n];
    }
  }
  return higher;
};
