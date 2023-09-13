var saveButton = document.querySelector(".save-btn");
var titleText = document.querySelector("#title");
var bodyText = document.querySelector("#body");
var outputContainer = document.querySelector(".output-container");


var currentIdeas = {
    ideas: []
};

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

function saveIdea() {
    currentIdeas.ideas.push(createIdea());
    console.log(currentIdeas.ideas);
}