var tab = document.querySelector('.tab1');
var tabbar = document.querySelector('.tabbar');

tabbar.addEventListener('click', onClick);

function onClick(e) {
    tabbar = e.target;
    if (tab.style.display === "block") {
        tab.style.display = "none";
    }

    else if (tab.style.display = "none") {
        tab.style.display = "block";
    }
    
}
