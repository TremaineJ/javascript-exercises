const removeFromArray = function(myValues, arg1, arg2, arg3, arg4) {
	let initArray = [];
	let newArray = initArray.concat(myValues);

	newArray.splice(arg1-1,1);

	return newArray;
}

module.exports = removeFromArray
