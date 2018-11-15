function summera(arr) {
    let sum = 0;
    for (let i = 0; i <= 12; i++) {
        sum += i;
        
    }
    return sum;
}
console.log(summera());

function newSum(params) {
    let arr = [2, 99, 47, 32, 5];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum  += arr[i];
        
    }
    return sum;
}
console.log(newSum());

function newSum2(params) {
    let arr = [2, 99, 47, 32, 5];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            sum  += arr[i];
        }
    }
    return sum;
}
console.log(newSum2());

function objArr(params) {
    let arr = [{value: 6}, {value: 9}, {value: 23}, {value: 55}];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].value;
        
    }
    return sum;
}
console.log(objArr());
