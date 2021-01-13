const detectCapitalUse = function(word) {
  let forcedCapital = word.toUpperCase();
  return word === forcedCapital ? true: false
};
