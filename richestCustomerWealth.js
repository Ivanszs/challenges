/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. 
Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.
example:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
*/
const maximumWealth = function(accounts) {
  let money = 0;
    for ( let i = 0; i < accounts.length; i++) {
      let moniz = accounts[i].reduce((a, b) => a + b)
      if (moniz > money) {
        money = moniz;
      }
    }
  return money;
};
