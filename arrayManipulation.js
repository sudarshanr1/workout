/*
 * Sample input [9,9,9] => [1,0,0,0], [1,3,5] => [1,3,6], [1,2,9,9,]=>[1,3,0,0]
*/

function manipulateArray(inpArr) {
    var outPutArr = [];
    inpArr[inpArr.length-1]++;
    var carry = false;
    while(inpArr.length > 0) {
        var lastVal = inpArr.pop();
        carry ? lastVal++ : lastVal;
        if (lastVal > 9) {
            lastVal = lastVal%10;
            carry = true;
        } else {
            carry = false;
        }
        outPutArr.unshift(lastVal);

    }
    carry ? outPutArr.unshift(1) : outPutArr;
    return outPutArr;
}

manipulateArray([9,9,9])
manipulateArray([1,3,4])
manipulateArray([1,2,9,9])