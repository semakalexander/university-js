const changeMaxToZero = (a, b) => a > b ? [0, b] : [a, 0];

const changeMaxToZero2 = (a, b) => {
  if (a > b) return [0, b];
  else if (b > a) return [a, 0];
  else return [1, 1];
}
