function findLongestWord(sentence) {
  var str = sentence.split(" ");
  var longest = 0
  for (var i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      var word = str[i];

    }
  }
  return word;

}
console.log(findLongestWord("I love Javascript"));

function reverseString(str) {
  myArray = str.split("");
  var reverseWord = myArray.reverse();
  var joinArray = reverseWord.join("");

  return joinArray;
}
console.log(reverseString("Hello"));
