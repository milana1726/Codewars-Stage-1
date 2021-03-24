function duplicateEncode(word){
var str = word.toLocaleLowerCase();
var newStr = '', symbol = '';

for (var i=0; i < str.length; i++){
	symbol = str.charAt(i);
	if (str.indexOf(symbol) == str.lastIndexOf(symbol)) {
    	newStr += '\(';
	} else {
	newStr += '\)';
	}
} 
return newStr;
}
