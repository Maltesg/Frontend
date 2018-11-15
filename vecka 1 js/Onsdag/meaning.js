function searchForMeaning(input) { // indexOf
    for (let i = 0; i <= input.length; i++) {
        if (input[i] === 42) {
             console.log("Meaning found at " + i);
            return; // return avbryter hela funktionen!!!
        }
    }
    console.log("Not Found");
    
}
searchForMeaning([1, 5, 42, 99])
searchForMeaning([9, 77 ,32]);