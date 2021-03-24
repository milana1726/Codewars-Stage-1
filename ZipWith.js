function zipWith(fn,a0,a1) {
	var x = 0;
		result = [];

	a0.length < a1.length ? x = a0.length : x = a1.length;

	for (var i = 0; i < x; i++) {
	    result.push(fn(a0[i], a1[i]));
	}
   	return result;
}

