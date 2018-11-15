function doubleAll(arr) {
    return arr.map(function(x){
        return x * 2;
    });

} 
console.log(doubleAll([1, 2, 3]));

function doubleRed(arr) {
   return arr.reduce(function(acc, x) {
        acc.push(x * 2);
        return acc;
    }, []);
}
console.log(doubleRed([1, 2, 3]));

function sum(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
}
console.log(sum([1, 2, 3]));
/*
function a() {
    console.log("a");
    
}

function b(cb) {
    setTimeout(function() {
        console.log("b");
        cb();
    }, 1000);
    
    
}

function c() {
    console.log("c");
    
}

a();
b(function(){
    setTimeout(c, 1000);
});

function ten() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
            
        }, i * 1000)
        
    }
}
setTimeout(ten, 5000);*/

function mean(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    
}
console.log(mean([1, 2, 3, 4, 5, 6]));

function divide(arr) {
    console.log(mean(arr)/arr.length);
}
divide([1, 2, 3, 4, 5, 6]);

function median(arr) {
    let median = 0;
    let numsLen = arr.length;
    

    if (numsLen % 2 === 0) {
        median = (arr[numsLen / 2 - 1] + arr[numsLen / 2 ] / 2);
    }
    else {
        median = arr[(numsLen - 1) / 2];
    }
    return median;
}
console.log(median([1, 2, 3, 4, 5, 6, 7,]));

function wordCount(str) {
    let fruits = { }
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (fruits[word]) {
            fruits[word] = fruits[word] + 1;
        }
        else {
            fruits[word] = 1;
        }    
    }
    return fruits;
}
console.log(wordCount("banana carrot banana"));

