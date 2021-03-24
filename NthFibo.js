function nthFibo(n) {
	var prev = 0; 
	var next = 1; 
	var sum = 0;

	if (n <= 2) {  
		console.log(n-1);
	} 

	for (var i = 2; i <= n-1; i++) { 
		sum = prev+next; 
		prev = next;
		next = sum;
	} 
	return sum;
}






