/*
For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. 
The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. 
If word is not a substring of sequence, word's maximum k-repeating value is 0.
Given strings sequence and word, return the maximum k-repeating value of word in sequence.
Example:
Input: sequence = "ababc", word = "ab"
Output: 2
*/
const maxRepeating = function(sequence, word) {
  let newString = sequence;
  let k = 0;
  while (newString.includes(word)) {
    newString = newString.replace(word, '');
    k++;
  }
  return k;
};

/*
Failing with input:
sequence: "aaabaaaabaaabaaaabaaaabaaaabaaaaba"
word: "aaaba"
Output:
6
Expected:
5

instead use: (not mine)

const maxRepeating = (sequence, word) => {
    let str = word;
    let counter = 0;
    while (sequence.includes(str)) {
        counter++;
        str += word;
    }
    return counter;
};
*/
