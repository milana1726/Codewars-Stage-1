function findOdd(A) {
	var countSum = 0, 
		num = 0,
		oddNum = 0;
    
    for (var i = 0; i < A.length; i++) {
  		num = A[i];
  		for (var j = 0; j < A.length; j++) {
  			if (num == A[j]) {
   				countSum++;
        	}
        }
        if (countSum % 2 != 0) {
        	oddNum = i;
        }
	    countSum = 0;
    }
  return A[oddNum];
}
