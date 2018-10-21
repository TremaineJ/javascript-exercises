const removeFromArray = function(...arguments) {
	
	let argArray = Array.from(arguments);
	let initialValues = argArray[0];

	let finalArray = initialValues.filter(number => !argArray.includes(number));

	return finalArray;

}

module.exports = removeFromArray
