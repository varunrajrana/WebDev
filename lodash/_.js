const _ = {
    clamp (number,lower,upper) {
        let lowerClampedValue = Math.max(number,lower);
        let clampedValue = Math.min(lowerClampedValue,upper);
        return clampedValue;
    },
    inRange (number,start,end) {
        if (end==undefined){
            end = start;
            start = 0;
        }
        if (start>end){
            let temp = end;
            end = start;
            start = temp;
        }
        return number >= start && number < end;
    },
    words (string) {
        return string.split(' ');
    },
    pad (string,length) {
        if (length<string.length) return string;
        let startPaddingLength = Math.floor((length - string.length)/2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    has (object,key) {
        return object[key] != undefined;
    },
    invert(object) {
        let invertedObject ={};
        for (let key in object) {
            let originalValue = object[key];
            //console.log(originalValue);
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },
    findKey(object,predicate) {
        for(key in object) {
            let value = object[key];
            predicateReturnValue = predicate(value);
            if (predicateReturnValue) return key;
        }
        return undefined;
    },
    drop(array,n=1){
        return array.slice(n);;
    },
    dropWhile(array,predicate){
        let i=0;
        while(predicate(array[i],i,array)){
            i++;
        }
        return this.drop(array,i);
    },
    chunk(array,n=1){
        let arr = [];
        let j=0;
        for (let i=0;i<array.length;i+=n){
            let chunk = array.slice(i,i+n);
            arr.push(chunk);
        }
        return arr;
    }
}




// Do not write or modify code below this line.
module.exports = _;