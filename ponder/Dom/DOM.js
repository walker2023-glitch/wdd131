let title = document.querySelector('h1');

console.log(title);

title.textContent = "Web Page Componests";

//Same thing as above
//document.querySelector('h1').title.textContent = "Web Page Componests";


//Same code
//document.querySelector('#topics').style.color = 'red';

const topics = document.querySelector('#topics');

topics.style.color = 'green';

const wrapper = document.getElementById('content');

wrapper.style.backgroundColor = "lightblue"

let list = document.querySelector('.list');

list.style.border = "3px solid black"

let para = document.querySelector('p')

para.style.fontSize = '2em';

para.classList.add('background');


const image = document.querySelector('img');

image.setAttribute('src', '../../images/newJS.png')



let selectElem = document.getElementById('webdevlist');

let html = document.querySelector('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');


selectElem.addEventListener('change', function(){
    html.style.color = "black";
    css.style.color = "black";
    js.style.color = "black";
    let codeValue = selectElem.value;
    //console.log(codeValue);
    document.getElementById(codeValue).style.color = "red";
});
                





