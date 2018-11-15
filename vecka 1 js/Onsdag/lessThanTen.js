function lessThanTen(array) {
    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 10) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}
lessThanTen([1, 5, 13, 2, 33, 25, 8, 10, 1, 3, 6, 7, 44, 123]);