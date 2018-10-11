var popupContainer = document.querySelector('.window');
var greybody = document.querySelector('.greybody');
var popup = document.querySelector('#popup');
var cancel = document.querySelector('.cancel');

popup.addEventListener('click', onClick);
cancel.addEventListener('click', onCancel);

function onClick(e) {
    popupContainer.style.display = "block";
    greybody.style.display = "block";
}       
function onCancel(e) {
    popupContainer.style.display = "none";
    greybody.style.display = "none";
}