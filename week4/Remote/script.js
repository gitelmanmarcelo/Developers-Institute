// Question 1:
// Clean the room function:

// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, 
// into individual array that is ordered.

// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function cleanTheRoom(input,type='number') {
    if (type === 'number')
        input.sort((a,b) => a-b);
    else
        input.sort();
    ans = [];
    let prior = null;
    let temp = [];
    for (item of input) {
        if (prior == item)
            temp.push(item);
        else {
            if (temp.length > 0){
                if (temp.length > 1)
                    ans.push(temp);
                else
                ans.push(temp[0]);
            }
            temp = [item];
        }
        prior = item;
    }
    if (temp.length > 1)
        ans.push(temp);
    else
        ans.push(temp[0]);
    return ans;
}

console.log(cleanTheRoom(input));

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
// should return [[1,2], ["2", "3"]]

input = [1,2,4,591,392,"391","2",5,10,2,1,1,"1",20,20,'s','a','l','1','1'];

function strAndNums(input) {
    const numArr = input.filter( elem => typeof elem == 'number');
    const strArr = input.filter( elem => typeof elem == 'string');
    const ans = [];
    ans.push(cleanTheRoom(numArr,'number'));
    ans.push(cleanTheRoom(strArr,'string'));
    return ans;
}

console.log(strAndNums(input));


// Question 2:
// Write a javascript function that takes an array of numbers and a target number.

// The function should find two different numbers in the array that, when added together, give the target number.

// For example: answer([1,2,3], 4) should return [1,3]

function findPair(nums,target){
    nums.sort((a,b) => a-b);
    let pend = nums.length - 1;
    while (nums[pend] > target)
        pend--;
    for (let i=0; i <=pend; i++) {
        for (let j=i+1; j <= pend; j++) {
            if (nums[i]+nums[j] === target)
                return [nums[i],nums[j]];
        }
    }
    return -1;
}

console.log(findPair([6,7,8,9,11,33,45,76,33,65,41,87,32], 74));


// Question 3:
// Write a function that converts HEX to RGB.

// Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX.


console.log(hexRgbConvert('#F07AE3'))  // '(240,122,227)'
console.log(hexRgbConvert('(240,122,227)'))  // '#F07AE3'

function hexRgbConvert(input) {
    if (input.slice(0,1) === '#') {   // input is in HEX
        return '(' + hex2num(input.slice(1,3)) + ',' + hex2num(input.slice(3,5)) + ',' 
                    + hex2num(input.slice(5,7)) + ')';
    }
    else {   // input is in RGB
        let ans = input.slice(1,-1).split(',');
        ans[0] = dec2hex(Number(ans[0]));
        ans[1] = dec2hex(Number(ans[1]));
        ans[2] = dec2hex(Number(ans[2]));
        return '#' + ans[0] + ans[1] + ans[2];
    }  
}

function dec2hex(dec) {
    if (dec > 255)
        return -1;
    let ans = '';
    if (Math.floor(dec/16) < 10)
        ans += Math.floor(dec/16).toString();
    else
        ans += String.fromCharCode(Math.floor(dec/16).toString() -10 + 65);
        if ((dec%16) < 10)
        ans += (dec%16).toString();
    else
        ans += String.fromCharCode((dec%16).toString() -10 + 65);  
    return ans;
}

function hex2num(hex) {
    ans = 0;
    if (hex.length !== 2)
        return -1;
    if (isNaN(hex.slice(1,2))) {
        if (hex.slice(1,2).toLowerCase().charCodeAt(0) < 97 ||
        hex.slice(1,2).toLowerCase().charCodeAt(0) > 102)
            return -1;
        ans += 10 - 97 + hex.slice(1,2).toLowerCase().charCodeAt(0);
    }  
    else {  // IS A NUMBER NOT A LETTER
        ans += Number(hex.slice(1,2));
    }  
    // MOST SIGNIFICANT DIGIT
    if (isNaN(hex.slice(0,1))) {
        if (hex.slice(0,1).toLowerCase().charCodeAt(0) < 97 ||
        hex.slice(0,1).toLowerCase().charCodeAt(0) > 102)
            return -1;
        ans += 16* ( 10 + hex.slice(0,1).toLowerCase().charCodeAt(0) - 97);
    }  
    else {  // IS A NUMBER NOT A LETTER
        ans += Number(hex.slice(0,1))*16;
    }
    return ans;  
}

