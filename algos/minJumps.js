function steps (arr) {
  if (arr.length < 2) return 0;
  let i = 0;
  let count = 1;
  while (i < arr.length) {
    let max = 0;
    let indexMax;
    count++;
    for (let j = i+1; j <= i+arr[i]; j++){
      if (arr[j] > max){
        max = arr[j]
        indexMax = j
      }
    }
    if (indexMax + max >= arr.length-1) return count
    else i = indexMax
  }
}

console.log(steps([1]))//0
console.log(steps([1,1,1,1,1]))//4
console.log(steps([2,1,2,3,1]))//2
console.log(steps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))//3
