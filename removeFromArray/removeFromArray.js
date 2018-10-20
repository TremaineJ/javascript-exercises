const removeFromArray = function(myValues, remove) {
	let initArray = [];
	let newArray = initArray.concat(myValues);

	newArray.splice(remove-1,1);

	return newArray;
}

module.exports = removeFromArray
