function romanToInt(s: string): number {
  let sum: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'I' && s.charAt(i+1) === 'V') {
      sum -= 1;
    } else if (s.charAt(i) === 'I' && s.charAt(i+1) === 'X') {
      sum -= 1;
    } else if (s.charAt(i) === 'X' && s.charAt(i+1) === 'L') {
      sum -= 10;
    } else if (s.charAt(i) === 'X' && s.charAt(i+1) === 'C') {
      sum -= 10;
    } else if (s.charAt(i) === 'C' && s.charAt(i+1) === 'D') {
      sum -= 100;
    } else if (s.charAt(i) === 'C' && s.charAt(i+1) === 'M') {
      sum -= 100;
    } else if (s.charAt(i) === 'I') {
      sum += 1;
    } else if (s.charAt(i) === 'V') {
      sum += 5;
    } else if (s.charAt(i) === 'X') {
      sum += 10;
    } else if (s.charAt(i) === 'L') {
      sum += 50;
    } else if (s.charAt(i) === 'C') {
      sum += 100;
    } else if (s.charAt(i) === 'D') {
      sum += 500;
    } else if (s.charAt(i) === 'M') {
      sum += 1000;
    }
  }
  return sum;
  
};
