function highAndLow(numbers){
	let numb = numbers.split(' ');
	let max = numb[0];
	let min = numb[0];

	for (let i = 0; i < numb.length; i++){
		let n = parseInt(numb[i]);

		if (n > max) {
			max = n;
		}
		else if (n < min) {
			min = n;
		}
	}
	return (max + ' ' + min);
}
