// Hangman game in Javascript
console.log("Hello World!");

// Get the playing area
const gameCanvas = document.querySelector(".gameArea");
const gameField = gameCanvas.getContext("2d");

// Hangman will be implemented using several functions
function pole() {
    gameField.fillRect();
}

// TESTBED in console
let testString = "Empire of Japan";
let unscrambledString = String("");
for (let i = 0; i < testString.length; i++) {
    if (testString.charAt(i) != ' ')
        unscrambledString = unscrambledString.concat('_ ');
    else
        unscrambledString = unscrambledString.concat(' ');
}

// Get the input from the user
window.alert("Help!");

// Generate a word
var generatedWord = "Empire of Japan";

// Function to draw hangman
function drawHangman(wrongs) {
	if (wrongs == 0) {
		console.log(" ===========");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log(" =======");
		console.log("=       =");
	}
	if (wrongs == 1) {
		console.log(" ===========");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     ====");
		console.log("  =    =    =");
		console.log("  =    =    =");
		console.log("  =     ====");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log(" =======");
		console.log("=       =");
	}
	if (wrongs == 2) {
		console.log(" ===========");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     ====");
		console.log("  =    =    =");
		console.log("  =    =    =");
		console.log("  =     ====");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log(" =======");
		console.log("=       =");
	}
	if (wrongs == 3) {
		console.log(" ===========");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     ====");
		console.log("  =    =    =");
		console.log("  =    =    =");
		console.log("  =     ====");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     /|| ");
		console.log("  =    / || ");
		console.log("  =   /  || ");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log(" =======");
		console.log("=       =");
	}
	if (wrongs == 4) {
		console.log(" ===========");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     ====");
		console.log("  =    =    =");
		console.log("  =    =    =");
		console.log("  =     ====");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     /||\\");
		console.log("  =    / || \\");
		console.log("  =   /  ||  \\");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log(" =======");
		console.log("=       =");
	}
	if (wrongs == 5) {
		console.log(" ===========");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     ====");
		console.log("  =    =    =");
		console.log("  =    =    =");
		console.log("  =     ====");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     /||\\");
		console.log("  =    / || \\");
		console.log("  =   /  ||  \\");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     /   ");
		console.log("  =    /   ");
		console.log("  =   /   ");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log(" =======");
		console.log("=       =");
	}
	if (wrongs == 6) {
		console.log(" ===========");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     ====");
		console.log("  =    =    =");
		console.log("  =    =    =");
		console.log("  =     ====");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     /||\\");
		console.log("  =    / || \\");
		console.log("  =   /  ||  \\");
		console.log("  =      || ");
		console.log("  =      || ");
		console.log("  =     /  \\ ");
		console.log("  =    /    \\");
		console.log("  =   /      \\");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log("  =");
		console.log(" =======");
		console.log("=       =");
	}
}