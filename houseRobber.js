let rob = function(nums) {
  //set values for nums.length = 0 || 1 & nums = null
    if (nums === null || nums.length === 0) {
      return 0;
    };
    if (nums.length === 1) {
      return nums[0];
    };
  
  //make parallel array that take numbers from the nums array to use later.
  
    let paArr = [];
  
  //setting basic rules for the first 2 houses
    
    paArr[0] = nums[0];
    paArr[1] = Math.max(paArr[0], nums[1]);
  
  //loop add the biggest number between the previous paArr index or the sum between current nums index
  //and the paArr number 2 index before.
  
    for (let i = 2; i < nums.length; i++) {
      paArr[i] = Math.max(paArr[i-1], nums[i] + paArr[i-2]);
    }
    return paArr[nums.length - 1];
  };