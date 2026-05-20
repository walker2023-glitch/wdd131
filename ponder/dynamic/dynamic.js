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

