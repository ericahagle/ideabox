var saveButton = document.querySelector(".save-btn");
var titleText = document.querySelector("#title");
var bodyText = document.querySelector("#body");
var outputContainer = document.querySelector(".output-container");
var showStarredBtn = document.querySelector(".show-starred-btn");
var deleteIdeaButton = document.querySelector(".delete-new-idea-img");
var faveIdeaButton = document.querySelector(".new-idea-fave-btn");

var currentIdeas = {
  ideas: []
}

window.addEventListener("load", toggleSaveButton);
titleText.addEventListener("input", toggleSaveButton);
bodyText.addEventListener("input", toggleSaveButton);
saveButton.addEventListener("click", saveIdea);
saveButton.addEventListener("click", showIdea);
showStarredBtn.addEventListener("click", changeBtnText);
showStarredBtn.addEventListener("click", displayFaves);
outputContainer.addEventListener("click", toggleFaveButton);
outputContainer.addEventListener("click", deleteIdea);

function createIdea() {
  var idea = {
    title: titleText.value,
    body: bodyText.value,
    id: Date.now(),
    isFave: false
  };
  return idea;
}

function toggleSaveButton() {
  if (titleText.value === '' || bodyText.value === '') {
    saveButton.classList.add("disabled");
    saveButton.disabled = true;
  } else {
    saveButton.classList.remove("disabled");
    saveButton.disabled = false;
  }
}

function saveIdea() {
  currentIdeas.ideas.push(createIdea());
}

function showIdea() {
  var newIdea = document.createElement("article");
  var newIdeaTitle = document.createElement("h2");
  var newIdeaBody = document.createElement("p");
  var newIdeaFaveBtn = document.createElement("img");
  var ideaBtnContainer = document.createElement("section");
  var deleteNewIdea = document.createElement("img");

  newIdea.className = "new-idea";
  newIdeaTitle.className = "new-idea-title";
  newIdeaBody.className = "new-idea-body";
  newIdeaFaveBtn.className = "new-idea-fave-btn";
  ideaBtnContainer.className = "idea-btn-container";
  deleteNewIdea.className = "delete-new-idea-img";

  for (var i = 0; i < currentIdeas.ideas.length; i++) {
    newIdeaTitle.innerHTML = currentIdeas.ideas[i].title;
    newIdeaBody.innerHTML = currentIdeas.ideas[i].body;

    newIdea.setAttribute("data-id", currentIdeas.ideas[i].id.toString());
    newIdeaFaveBtn.setAttribute("src", "assets/star.svg");
    newIdeaFaveBtn.setAttribute("alt", "a white star-shaped button");
    deleteNewIdea.setAttribute("src", "assets/delete.svg");
    deleteNewIdea.setAttribute("alt", "a white colored icon that looks like an x");

    newIdea.innerHTML = "";

    outputContainer.appendChild(newIdea);
    newIdea.appendChild(ideaBtnContainer);
    ideaBtnContainer.appendChild(deleteNewIdea);
    newIdea.appendChild(newIdeaTitle);
    newIdea.appendChild(newIdeaBody);
    ideaBtnContainer.appendChild(newIdeaFaveBtn);
    ideaBtnContainer.appendChild(deleteNewIdea);
  }
  titleText.value = "";
  bodyText.value = "";
  toggleSaveButton();
}

function deleteIdea(event) {
  if (event.target.classList.contains("delete-new-idea-img")) {
    var idToDelete = event.target.closest(".new-idea").getAttribute("data-id");
    var newIdeasArray = [];

    for (var i = 0; i < currentIdeas.ideas.length; i++) {
      if (currentIdeas.ideas[i].id.toString() !== idToDelete) {
        newIdeasArray.push(currentIdeas.ideas[i]);
      }
    }
    currentIdeas.ideas = newIdeasArray;

    var card = event.target.closest(".new-idea");
    if (card) {
      outputContainer.removeChild(card);
    }
  }
}

function toggleFaveButton(event) {
  if (event.target.classList.contains("new-idea-fave-btn")) {
    var faveIdeaId = event.target.closest(".new-idea").getAttribute("data-id");

    for (var i = 0; i < currentIdeas.ideas.length; i++) {
      if ((currentIdeas.ideas[i].id.toString() === faveIdeaId) && (currentIdeas.ideas[i].isFave === true)) {
        currentIdeas.ideas[i].isFave = false;
        event.target.removeAttribute("src");
        event.target.removeAttribute("alt");
        event.target.setAttribute("src", "assets/star.svg");
        event.target.setAttribute("alt", "a white star-shaped button");
        break;
      } else if ((currentIdeas.ideas[i].id.toString() === faveIdeaId) && (currentIdeas.ideas[i].isFave === false)) {
        currentIdeas.ideas[i].isFave = true;
        event.target.removeAttribute("src");
        event.target.removeAttribute("alt");
        event.target.setAttribute("src", "assets/star-active.svg");
        event.target.setAttribute("alt", "an orange star-shaped button");
        break;
      }
    }
  }
}

function displayFaves() {
  if (showStarredBtn.innerText === "Show All Ideas") {
    for (var i = 0; i < outputContainer.children.length; i++) {
      if (!currentIdeas.ideas[i].isFave) {
        outputContainer.children[i].classList.add("hidden");
      }
    }
  } else {
    for (var i = 0; i < outputContainer.children.length; i++) {
      outputContainer.children[i].classList.remove("hidden");
    }
  }
}

function changeBtnText() {
  if (showStarredBtn.innerText === "Show Starred Ideas") {
    showStarredBtn.innerText = "Show All Ideas";
  } else {
    showStarredBtn.innerText = "Show Starred Ideas";
  }
}

// An attempt to made to turn this into named functions and separate out the event listeners but that proved too difficult to achieve the time allotted. So the decision was made to leave this piece of code as-is.
window.onload = function() {
  var titleTextarea = document.getElementById("title");
  var bodyTextarea = document.getElementById("body");

  titleTextarea.addEventListener("input", function() {
    checkCharLimit(titleTextarea, 50, "title");
  });

  bodyTextarea.addEventListener("input", function() {
    checkCharLimit(bodyTextarea, 400, "body");
  });
}

function checkCharLimit(textarea, limit, inputField) {
  if (textarea.value.length >= limit) {
    alert(`You have reached the character limit of ${limit} for the ${inputField}!`);
  }
}