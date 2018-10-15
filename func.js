function isBetween(x, from, to) {
  if (x>from && x< to) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isBetween(10, 0, 20));

var array = [];
function range(from, to) {
  for (var i = from; i < to; i++) {
    array.push(i);

  }
  return array;

}
console.log(range(3, 10));

function min(a, b) {
  if (a < b) {
    return a;

  }
  else if (a > b) {
    return b;

  }
}
console.log(min(20, 10));
