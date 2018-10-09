var p = document.createElement('p');
p.textContent = 'Hello World';
var noText = document.querySelector('#no-text');
noText.appendChild(p);

var main = document.querySelector('main');
var remove = document.querySelectorAll('.remove-me');
for (var i = 0; i < remove.length; i++) {
  main.removeChild(remove[i]);

}
