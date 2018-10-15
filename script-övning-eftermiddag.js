function hellox(name) {
  var hey = "hello " + name;
  return hey;
}
console.log(hellox("Malte"));

function triangle(height) {
  var row = " ";
  for (var i = 1; i <= height; i++) {
    row += "#"
    console.log(row);
  }
}
triangle(7);

function palindrom(str) {
    return str === str.split('').reverse().join('');
}
console.log(palindrom("notabba"));

function wordCount(str) {
    return  str.split(" ").length;
}
console.log(wordCount("Hello World"));

  function minimum(arr) {
    var val = Infinity;
    for (var i = 0; i < arr.length; i++) {
      if (val > arr[i]) {
        val = arr[i];
      }
    }
    return val;
  }
console.log(minimum([27, 23, 65, 4, 3, 78]));

function maximum(arr) {
  var val = 0;
  for (var i = 0; i < arr.length; i++) {
    if (val < arr[i]) {
      val = arr[i];
    }
  }
  return val;
}
console.log(maximum([27, 23, 65, 1, 3, 78]));

function powers(arr, num) {

  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], num)
  }
  return arr;
}
console.log(powers([1, 2, 3], 2));

function hamming(word1, word2) {
  var symbol = 0;
  for (var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      symbol++;
    }
  }
  return symbol;
}
console.log(hamming("hello", "hilla"));

function fizzbuzz() {

  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("FIZZBUZZ");
      }
      else {
        console.log("Fizz");
      }
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
  return i;
}
console.log(fizzbuzz());

function crypt(choise, word, shift) {
  var wordArr = word.split();
  var output = [];

  for (var i = 0; i < wordArr.length; i++) {
    var code = wordArr.charCodeAt(i);
    if (true) {
      
    }
  }
}
