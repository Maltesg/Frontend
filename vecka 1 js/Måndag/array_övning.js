function getDate() {
    let myDate = [];

    for (let m = 07; m < 09; m++) {
        for (let d = 01; d < 32; d++) {
            if (d < 10) {
                myDate.push("2018-0" + m + "-0" + d);
            }
            else{
                myDate.push("2018-0" + m + "-" + d);
            }
            
            

        }
        
    }
    return myDate;
    
    
}

let array = getDate();

for (let x of array) {
    console.log(x);
    
}

function double(d) {
    return d * 2;
}

function addFive(a) {
    return a + 5;
}

console.log(addFive(double(10)));
console.log(double(addFive(10)));