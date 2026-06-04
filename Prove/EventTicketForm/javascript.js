
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notesContainer2 = document.querySelector("#notesContainer2");
const notes = document.querySelector("#notes");
const notes2 = document.querySelector("#notes2");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;
    if(value === 'student'){
        notesContainer.hidden = false;
        notes.required = true;

    }
    else {
        notesContainer.hidden = true;
        notes.required = false;
    }
     if(value === 'guest'){
        notesContainer2.hidden = false;
        notes.required = true;
           
    }
    else {
        notesContainer2.hidden = true;
        notes.required = false;
    }
  // Show the travel notes on the form if they are choosing many campuses and require it
  
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  // Validate the input
  // Let the user know to select at least one campus
    /*if(selectedCampuses.length === 0){
        output.textContent = "Please choose at least one campus";
        return;
    }
  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note
    if(type == 'many' && !notes){
        output.textContent = "Please fill out the travel plans sections";
        return;
    }
  
    
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  if(type == 'many' && selectedCampuses.length < 2){
        output.textContent = "Please select at least 2 campuses";
        return;
    }



  if(type == 'single' && selectedCampuses.length > 1){
        output.textContent = "Please select at only 1 campuses";
        return;
    }
*/
  output.innerHTML = `
  <h2>Event Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${availableDate}</p>
  <p>Participatant Type: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          