const form = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
const correctName = "Laurie Jean"; 

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const enteredName = nameInput.value.trim();