var FilterString = function(value) {
 		var strNum = value.match(/\d/g).join('');
 		strNum = parseInt(strNum);
 		return strNum;
}
