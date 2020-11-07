/*
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
  let arr = s.split(' ');
  let wArr = arr.filter((w) => w != '', undefined, null, ' ');
  lWord = wArr[wArr.length - 1];
  if (lWord === undefined) {
    return 0;
  };
  let lWLength = lWord.length;
  return lWLength;
};