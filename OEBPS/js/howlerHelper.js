var counter = 1;
var canPlayNarration = true;
var elementToPlay; 

function playSoundAndChangeCSS(clickedElement) {
	narration.play(clickedElement);

	document.getElementById(clickedElement).style.color = "yellow";
    document.getElementById(clickedElement).style.fontSize = "58px";

    narration.on('end', function(){
    	document.getElementById(clickedElement).style.color = "white";
    	document.getElementById(clickedElement).style.fontSize = "48px";
    });
}

function playAll(pageNumber, numberOfWords) {
	// narration.play('all'); // the cheap method without styling!

	canPlayNarration = true;
	counter = 1;

	console.log("Counter: " + counter);
	console.log("Can Play? " + canPlayNarration);
	

	elementToPlay = createSoundID(pageNumber, counter);
	narration.play(elementToPlay);

	document.getElementById(elementToPlay).style.color = "yellow";
    document.getElementById(elementToPlay).style.fontSize = "58px";

    narration.on('end', function(){
    	document.getElementById(elementToPlay).style.color = "white";
    	document.getElementById(elementToPlay).style.fontSize = "48px";

    	counter++;

    	if (counter > numberOfWords) {
    		canPlayNarration = false;
    		counter = 1;
    	}
    	
    	if (canPlayNarration) {
    		console.log("Counter: " + counter);
			console.log("Can Play? " + canPlayNarration);
    		elementToPlay = createSoundID(pageNumber, counter);
    		narration.play(elementToPlay);
    		document.getElementById(elementToPlay).style.color = "yellow";
    		document.getElementById(elementToPlay).style.fontSize = "58px";
    	}	
    });
}

// returns a string for what element should be played based on the page number and the word number
function createSoundID(pageNumber, wordNumber) {
	return ("smil_p" + pageNumber + "w" + wordNumber);
}