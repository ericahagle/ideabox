var saveButton = document.querySelector(".save-btn");
var titleText = document.querySelector("#title");
var bodyText = document.querySelector("#body");
var outputContainer = document.querySelector(".output-container");


var currentIdeas = {
  ideas: []
};

saveButton.addEventListener("click", function() {
  saveIdea();
  showIdea();
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
}

function showIdea() {
  var newIdea = document.createElement("article");
  var newIdeaTitle = document.createElement("h2");
  var newIdeaBody = document.createElement("p");

  newIdea.className = "new-idea";
  newIdeaTitle.className = "new-idea-title";
  newIdeaBody.className = "new-idea-body";

  for (var i = 0; i < currentIdeas.ideas.length; i++) {
    newIdeaTitle.innerHTML = currentIdeas.ideas[i].title;
    newIdeaBody.innerHTML = currentIdeas.ideas[i].body;
    newIdea.innerHTML = "";
    newIdea.appendChild(newIdeaTitle);
    newIdea.appendChild(newIdeaBody);
    outputContainer.appendChild(newIdea);
  }
}