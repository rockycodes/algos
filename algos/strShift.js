function strShift (string, key) {
	const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	let newStr = ''
	for (let i = 0; i < string.length; i++){
		let index = alphabet.indexOf(string[i])
		let newIndex = index + key
		if (newIndex > 25){
			newIndex %= 26
		}
		newStr += alphabet[newIndex]
	}
	return newStr;
}

module.exports = strShift;
