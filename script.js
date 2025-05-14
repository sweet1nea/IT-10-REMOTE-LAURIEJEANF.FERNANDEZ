const form = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
const correctName = "Laurie Jean"; 

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

const enteredName = nameInput.value.trim();

nameInput.classList.remove('error', 'success');

    if (enteredName === "") {
        alert("Name field cannot be empty.");
        nameInput.classList.add('error');
        return;
    }

    if (enteredName !== correctName) {
        alert("Incorrect name. Please try again.");
        nameInput.classList.add('error');
    } else {
        alert("Success! Name is correct.");
        nameInput.classList.add('success');
    }
 });