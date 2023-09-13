var saveButton = document.querySelector(".save-btn");
var titleText = document.querySelector("#title");
var bodyText = document.querySelector("#body");
var outputContainer = document.querySelector(".output-container");

var currentIdeas = {
    ideas: []
};

titleInput.addEventListener('input', toggleSaveButton);
bodyInput.addEventListener('input', toggleSaveButton);
saveButton.addEventListener("click", function() {
    saveIdea();
})

function createIdea(){
    var idea = {
        title: titleText.value, 
        body: bodyText.value, 
        id: Date.now()
    };
    return idea;
}

function toggleSaveButton() {
    if (titleInput.value === '' || bodyInput.value === '') {
        saveButton.classList.add('disabled')
        saveButton.disabled = true
    } else {
        saveButton.classList.remove('disabled')
        saveButton.disabled = false;
    }
}

function saveIdea() {
    currentIdeas.ideas.push(createIdea());
}