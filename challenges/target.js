let intro = document.getElementById("intro");
intro.style.backgroundColor = 'yellow';

let em = document.querySelector('em');
em.style.backgroundColor = '#acbfcc';

em.textContent = "USS Voyager Starship";

let starship = document.getElementById("starship");

let starship_img = document.createElement('img');
starship_img.setAttribute('src', 'https://bit.ly/3RfG4sY');
starship.appendChild(starship_img);


starship_img.classList.add("rounded");