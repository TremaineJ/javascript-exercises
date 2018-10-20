const repeatString = function(txt,number) {
	
	if(number < 0){
		return 'ERROR';
	}

	let myString='';
	for(let i=0;i<number;i++){
		if(i===0){
			myString = txt;
		}
		else{
			myString += txt;
		}
	}
	return myString;
}

module.exports = repeatString
