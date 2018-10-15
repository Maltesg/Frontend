function onClick(e) {
  var button = e.target;
  console.log('Button clicked: ' + button.textContent);
}

var myButtons = document.querySelectorAll('button');
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', onClick);
}
