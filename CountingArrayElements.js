function count(array){
	var result = new Map();
	var countSum = 0;

    for (var i=0; i < array.length; i++) {
    	var num = array[i];
		if (result.has(num)){
			result.set(num,result.get(num)+1);
    	} else {
    		result.set(num,1);
    	}
    }

    let obj = {};  
	result.forEach((value, key) => {  
    	obj[key] = value; 
	});  

    return (obj);
}


