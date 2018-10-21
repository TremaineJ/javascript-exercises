const sumAll = function(...args) {

	function compareNumbers(a,b){
		return a-b;
	}

	let array1 = Array.from(args);
	let sortedArray = array1.sort(compareNumbers);
	let lastValue = sortedArray.length - 1;
	let sum = 0;

	for(i=sortedArray[0]; i<=sortedArray[lastValue]; i++){
		sum +=i;
	}

	return sum;
}

module.exports = sumAll
