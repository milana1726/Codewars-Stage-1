function calc(x) {
    var TARGET = 7;
    var REPLACE = 1;

    var charCodeStr = '';
    var totalSum = 0;
    var sevensSum = 0;

    for(let i = 0; i < x.length; i++) {
      var total = x[i].charCodeAt() + '';
      charCodeStr += total;
        for (let j = 0; j < total.length; j++) {
            totalSum += parseInt(total[j]);
            if (total[j] === TARGET.toString()) {
              sevensSum++;
            }
       }
    }
    var result = sevensSum * (TARGET-REPLACE);
    return result;
}




