// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const isNegative = n < 0;
  const abs = Math.abs(n);
  const reversed = abs.toString().split('').reverse().join('');

  return isNegative ? Number(reversed) * -1 : Number(reversed);
}

module.exports = reverseInt;
