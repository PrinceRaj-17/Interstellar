let homeLink = document.getElementById("home-link");
let simulationBtn = document.getElementById("simulation-btn");
let githubLink = document.getElementById("github");

simulationBtn.addEventListener("click", () => {
	window.location.href = window.location.protocol + "//" + window.location.host + "/simulation";
})

homeLink.addEventListener("click", () => {
	window.location.href = window.location.protocol + "//" + window.location.host;
})

githubLink.addEventListener("click", () => {
	Window.location.href = "https://github.com/PrinceRaj-17/Interstellar";
})

function changeHrefValue(elementsClassName, value) {
	let elements = document.querySelectorAll(elementsClassName);
	for(let element of elements) {
		element.setAttribute("href", window.location.protocol + "//" + window.location.host + value);
	}
}

changeHrefValue(".about-page-link", "/about");
changeHrefValue(".game-page-link", "/game");