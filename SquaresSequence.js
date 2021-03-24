function squares(x, n) {
	var arr = [];
	arr[0] = x;
    arr.length = n;
	  	if (n <= 0) {
		 	arr = [];
      		console.log(arr);
      		return;
	  	}
	for (var i=1; i < n; i++) {
		arr[i] = Math.pow(arr[i-1], 2);
		}
return arr;
}
