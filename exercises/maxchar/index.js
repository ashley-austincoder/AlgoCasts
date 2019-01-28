// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  str.split('').forEach(c => {
    chars[c] = chars[c] ? chars[c]++ : 1;
  });
  let maxChar = '';
  let maxCount = 0;
  Object.keys(chars).forEach(key => {
    if(chars[key] > maxCount) {
      maxChar = key;
      maxCount = chars[key];
    }
  });
  return maxChar;
}

module.exports = maxChar;
