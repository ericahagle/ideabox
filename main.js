var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var saveButton = document.querySelector('button');

titleInput.addEventListener('input', toggleSaveButton);
bodyInput.addEventListener('input', toggleSaveButton);

// toggleSaveButton();

function toggleSaveButton() {
    if (titleInput.value === '' || bodyInput.value === '') {
        saveButton.classList.add('disabled')
        saveButton.disabled = true
    } else {
        saveButton.classList.remove('disabled')
        saveButton.disabled = false;
    }
}








