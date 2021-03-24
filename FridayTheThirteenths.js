function fridayTheThirteenths(start, end=start) {
	var fridays13 = '';
	var d = new Date();

	while (end >= start) {
		for (month = 0; month < 12; month++) {
		     d.setFullYear(start, month, 13);
		        if (d.getDay() == 5) {
		        	fridays13 += (d.toLocaleDateString("en-US")) + ' ';
		        }
		}
		start++;
	}
	return fridays13.trim();
}


