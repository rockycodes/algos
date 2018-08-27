//takes in an array of integers (unsorted) and a target sum and returns and array of arrays of triplets that add to that target sum (in numerical order)

function threeNumSum(array, targetSum) {
	//sort the array
	//for loop with pointers inside the foor loop
	let returnArr = []
	let sortedArr = array.sort((a, b) => a-b)
	for (let i=0; i<array.length; i++) {
		let left = i+1
		let right = array.length-1
		let diff = targetSum - sortedArr[i]
		while (left < right){
			if (sortedArr[left] + sortedArr[right] === diff){
				returnArr.push([sortedArr[i], sortedArr[left], sortedArr[right]])
				left++
				right--
			}
			else if (sortedArr[left] + sortedArr[right] > diff){
				right--
			}
			else if (sortedArr[left] + sortedArr[right] < diff){
				left++
			}

		}
	}
	return returnArr
}

module.exports = threeNumSum