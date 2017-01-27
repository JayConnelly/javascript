var uList = document.getElementById("our-list");
var debug = document.getElementById("debug-id");

var headLineText = document.getElementById("our-headline");
var addButton = document.getElementById("add-button");
var ourList = document.getElementById("our-list").getElementsByTagName("li");
var nextItem = 4;
var nextToRemove = "";
addButton.addEventListener("click", addItem);

function addItem() {	
 uList.innerHTML += "<li>Something New " + nextItem + "</li>"
 nextItem += 1;
}

uList.addEventListener("click", activateItem);

function activateItem(e) {
	if (e.target.nodeName == "LI") {
		headLineText.innerHTML = e.target.innerHTML;
		for (i=0;i<ourList.length;i++) { 
			ourList[i].classList.remove("highlight");
		}
		e.target.classList.add("highlight");
		nextToRemove = e.target;
		debug.innerHTML = e.target.innerHTML;
	}
}

var deleteButton = document.getElementById("delete-button");
var selectedItem = nextItem - 1
deleteButton.addEventListener("click", deleteItem);
function deleteItem(e) {
	for (i=0;i<ourList.length;i++) { 
			if (ourList[i] == nextToRemove) {
				ourList[i].remove();
			}
	}
}
