function checkConcatenatedSum (number,n) {
	number = Math.abs(number);
	var numStr = number.toString();
	var numSum = 0;
  
    for (var i=0; i<numStr.length; i++){
		numSum += parseInt(numStr[i].repeat(n));
	}
  
	if (numSum === number) {
		return true;
	} else {
		return false;
	}

}
