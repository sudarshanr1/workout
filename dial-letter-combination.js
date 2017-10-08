/*

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*/
var letterCombinations = function(digits) {
    var outPut = [];
    var input = [];
    var res="";
    if (digits === undefined || digits.length===0) {
        return outPut;
    }
    const dials = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z'],
    }
    getPossibilities(digits, dials, outPut, 0, res);
    return getPossibilities(digits, dials, outPut, 0, res);
    
}

function getPossibilities(digits, dials, outPut, pos, res) {
    if (digits.length === res.length && outPut.indexOf(res) < 0) {
        outPut.push(res);
        return;
    }
    if (dials[digits.charAt(pos)] !== undefined) {
        dials[digits.charAt(pos)].forEach(function(element) {
            res+=element;
            getPossibilities(digits, dials, outPut, pos+1, res);
            res = res.slice(0, res.length-1)
        });
    }
    return outPut;
}
