student = [
        {last: "Tinney", 
        first: "Tyler"},

        {last: "Jackson",
            first: "Daniel"
        },
        {last: "McClure",
            first: "Eldon"
        },
        
];


let container = document.querySelector('#student');

student.forEach(function(item)
{

    let name = document.createElement('div');
    name.className = 'format';



    let html = `<p class='details'>${item.first}</p>
    <p class='details'>${item.last}</p>
    <hr>`;
    

    //Only does the last one
    //container.innerHTML = html;

    //does all, not the best
    //container.innerHTML += html;


    name.innerHTML = html;
    container.append(name);
})


//literal array
const pets = ['cats', 'dog', 'bird'];

//constructor array
const animal = new Array('pig', 'goat,', 'sheep');

pets.push('lizard');

console.log(pets);

console.log(pets[0]);

//puts at begginning
pets.unshift('Bob');
//Gets rid of the last one
pets.pop();
