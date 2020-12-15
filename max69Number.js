/* ugly but effective
Given a positive integer num consisting only of digits 6 and 9.
Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
example:
Input: num = 9669
Output: 9969
*/
const maximum69Number = function(num) {
  let n = num.toString();
  n = n.split('');
  for (let i = 0; i < n.length; i++) {
    if (n[i] == 6) {
      n[i] = '9';
      break
    }
  }
  n = n.toString();
  n = n.replace(/,/g, '');
  return n;
};
