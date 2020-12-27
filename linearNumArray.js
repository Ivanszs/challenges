const linear = function(A) {
  let mono = false;
  for (let i = 1; i < A.length; i++) {
    if (A[i-1] === A[i] +- 1 ||  A[i-1] === A[i]) {
      mono = true;
    } else {
      mono = false;
    }
  }
  return mono
};
