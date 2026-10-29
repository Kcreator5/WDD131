
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');
const notesLabel = document.querySelector('label[for="notes"]');


function updateNotesField() {
  const value = travelRange.value;

  // This wtiches the lable and input requirments depending on what type is selected.
    if (value == 'blank') {
        notesContainer.hidden = true; 
        notes.required = false;
    } else {
        notesContainer.hidden = false; 
        notes.required = true;  
    
    if (value === "student") {
      notesLabel.textContent = "Student ID";
     //  notes.pattern = "\\d{9}";
      notes.maxLength = 9;
    } else {
        notesLabel.textContent = "Access Code"
    } }
}

travelRange.addEventListener("change", updateNotesField);



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

output.textContent = "";
form.addEventListener("submit", function (event) {
  event.preventDefault();


  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  // Validate the input
    if (!firstName || !lastName ) {
        output.textContent = "Please fill out names.";
        return;
    }

    if (!email) {
        output.textContent = "Please fill out Email.";
        return;
    }

    if (type === "student" && note.length < 9) {
        output.textContent = " Student I# must be 9 digits.";
        return;
    }

    if (type === "guest" && note !== "EVENT131") {
        output.textContent = "Invalid code.";
        return;
    }

    if (!availableDate) {
        output.textContent = "Please select an event date.";
        return;
    }

    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    if (!type || type === "blank") {
        output.textContent = "Please select type";
        return;
    }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p> ${type}</p>
  <p> ${availableDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          