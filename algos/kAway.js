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
