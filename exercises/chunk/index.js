// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while(index < array.length) {
    const slice = array.slice(index, index + size);
    chunked.push(slice);
    index = index + size;
  }
  return chunked;
}

module.exports = chunk;

/*
  Alternate solutions

  function chunk(array, size) {
    const chunked = [];
    for(let n of array) {
      const last = chunked[chunked.length - 1];
      if(!last || last.length === size) {
        chunked.push([n]);
      } else {
        last.push(n);
      }
    }
    return chunked;
  }

  function chunk(array, size) {
    const chunked = [];
    let chunk = [];
    for(let i = 0; i < array.length; i++) {
      if(chunk.length < size) {
        chunk.push(array[i]);
      } else {
        chunked.push(chunk);
        chunk = [array[i]];
      }
    }
    if (chunk.length) {
      chunked.push(chunk);
    }
    return chunked;
  }

*/
