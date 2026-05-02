
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

let body = document.querySelector('body');
let content = document.getElementById('content');

let first = document.getElementById('first');
let last = document.getElementById('last');

let para = document.querySelector('p');
let header = document.querySelector('h1');
let listItem = document.querySelector('li');
let line = document.querySelector('hr');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        body.classList.remove("whiteBack", "darkFront");
        body.classList.add("darkBack", "whiteFront");
        first.style.color = "white";
        last.style.color = "white";
        logo.setAttribute('src', 'images/BYUIDarkMode.jpg')

    } else {
        body.classList.remove("darkBack", "whiteFront");
        body.classList.add("whiteBack", "darkFront");
        first.style.color = "black";
        last.style.color = "black";
        logo.setAttribute('src', 'images/BYUI logo.jpg')
    }
}           
                    