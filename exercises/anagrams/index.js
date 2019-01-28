// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('');

  if (stringA.length !== stringB.length) return false;

  let foundProblem = false;
  for(let c of stringA) {
    const findC = stringB.indexOf(c);
    if(findC === -1 || !stringB.length) {
      foundProblem = true;
      break;
    } else {
      stringB.splice(findC, 1);
    }
  }
  return !foundProblem;
}

anagrams('RAIL! SAFETY!', 'fairy tales');

module.exports = anagrams;
