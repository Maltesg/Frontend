/*function ptag() {
  var p = document.getElementsByTagName('p');
  var ptag = document.getElementsByClassName('ptag')

  for (var i = 0; i < ptag.length; i++) {
    ptag[i].setAttribute('style', 'color: red;')
  }
}
ptag();

function tomato() {
  var myDiv = document.getElementById('myDiv');
  var span = document.getElementsByTagName('span');
  var red = document.getElementsByClassName('red')

  for (var i = 0; i < red.length; i++) {
    red[i].setAttribute('style', 'color: red')
  }

  var p = document.getElementsByTagName('p');
  for (var i = 0; i < 2; i++) {
    p[i].setAttribute('style', 'color: red;')
  }
}
tomato();

*/
var p1 = document.createElement('p');
var p2 = document.createElement('p');
var p3 = document.createElement('p');

p1.textContent = 'Apple';
p2.textContent = 'Pear';
p3.textContent = 'Banana';

var body = document.querySelector('body');
body.appendChild(p1);
body.appendChild(p2);
body.appendChild(p3);
