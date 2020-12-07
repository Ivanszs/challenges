/*
Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
Return the number of negative numbers in grid.
example:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
*/
const countNegatives = function(grid) {
  let output = 0;
    for (let i = 0; i < grid.length; i++) {
      let gridito = grid[i]
      for (let j = 0; j < grid[i].length; j++) {
        if (gridito[j] < 0) {
          output += 1;
        }
      }
    }
  return output
};
