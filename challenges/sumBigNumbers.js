const aVeryBigSum = function (ar) {
    let maxLength = -Infinity;
    for(let i = 0; i < ar.length; i += 1 ){
        if(ar[i].toString().length>maxLength){
            maxLength = ar[i].toString().length;
        } 
    }
    let result = new Array(maxLength +1);
    result.fill(0);
   
    let lastIndex = result.length -1;
    for(let i = 0; i < ar.length; i += 1 ){
        let number = ar[i].toString();
        let size = number.length;
        for(let j = 0; j < size; j += 1){
            result[lastIndex-j] += Number(number[size-1-j])
            if(result[lastIndex-j] >= 10){
                let zeroDigit = result[lastIndex-j] % 10;
                result[lastIndex-j-1] +=  (result[lastIndex-j] - zeroDigit) / 10;
                result[lastIndex-j] = zeroDigit;
            }
        }
    }
    return Number(result.join(""));
}

module.exports =aVeryBigSum;