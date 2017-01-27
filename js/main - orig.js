var uList = document.getElementById("our-list");
var headLineText = document.getElementById("our-headline");
var addButton = document.getElementById("add-button");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
var nextItem = 1;
addButton.addEventListener("click", addItem);

function addItem() {	
 uList.innerHTML += "<li>Something New " + nextItem + "</li>"
 nextItem += 1;
}

uList.addEventListener("click", activateItem);


function activateItem(e) {
	if (e.target.nodeName == "LI") {
		headLineText.innerHTML = e.target.innerHTML;
		for (i=0;i<listItems.length;i++) { 
			listItems[i].classList.remove("highlight");
		}
		e.target.classList.add("highlight");
	}
}

