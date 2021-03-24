function divCon(x){
	var sum = 0;
  		for(var i = 0; i < x.length;  i++){
    		if (typeof x[i] === 'number') {
    			sum += x[i];
    		} else {
    			sum -= x[i];
    		}
  		}
  	return sum;
}
