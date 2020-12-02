/*
Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. 
Notice that multiple kids can have the greatest number of candies.
example:
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
*/
const kidsWithCandies = function(candies, extraCandies) {
    //loop, give extra candy, compare. if >= to the highest number = true
  let greatestOrNot = [];
  for (let i = 0; i < candies.length; i++) {
    let sumCandies = candies[i] + extraCandies;
    greatestOrNot[i] = true;
    for(let j = 0; j < candies.length; j++) {
      if (sumCandies < candies[j]) {
        greatestOrNot[i] = false;
      }
    }
  }
  return greatestOrNot;
};
