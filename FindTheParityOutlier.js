function findOutlier(integers){
	var odd = [];
	var even = [];
	for (i=0; i < integers.length; i++){
		if (integers[i] % 2 == 0) {
			even.push(integers[i]);
		} else {
			odd.push(integers[i]);
		}
	}
	if (even.length > odd.length) {
		return odd[0];
	} else { 
		return even[0];
	}
}
