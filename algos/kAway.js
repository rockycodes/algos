//Given an array of integers 'arr' where each element is at most k places away from its sorted position, code an efficient function kArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

function kAway (arr, k) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < i + k + 1; j++){
      if (arr[j] < arr[i]){
        let min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }
  }
  return arr;
}

module.exports = kAway;
