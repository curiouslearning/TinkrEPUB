var colorList = ["red", "brown", "green", "orange", "yellow", "white"]; // our list of colors
var ranNum = '0'; // holds a random number
var targetFrog = ''; // the frog we want the reader to tap
var targetColor = ''; // stores the color of the frog we want the reader to tap
var altColor1 = '';  // stores a different color for a frog compared to the targetColor
var altColor2 = ''; // stores a different color for a frog compared to the targetColor and altColor1

// our audio
var frogYupAudio = new Audio('audio/frog_yup.mp3');
frogYupAudio.loop = false;
var frogNopeAudio = new Audio('audio/frog_nope.mp3');
frogNopeAudio.loop = false;

// our click listener
document.addEventListener('click', function(e) {
    var clickedElement = e.target.id;

    console.log(clickedElement);

    // play the appropriate audio based on whether the reader taps the frog they're supposed to tap
    switch(clickedElement) {
    	case "rightFrogMask":
    	case "leftFrogMask":
    	case "centerFrogMask":
    		if(clickedElement == "rightFrogMask" && targetFrog == 0)
    			frogYupAudio.play();
   			else if(clickedElement == "leftFrogMask" && targetFrog == 1)
    			frogYupAudio.play();
    		else if(clickedElement == "centerFrogMask" && targetFrog == 2)
    			frogYupAudio.play();
    		else
    			frogNopeAudio.play();
    	break;
    }
    
    
});

// generate a random number, set what color we will use as our targetColor, and set that color in the text
ranNum = Math.floor(Math.random() * colorList.length);
targetColor = colorList[ranNum];
document.getElementById("smil_p10w4").innerHTML = targetColor;

// generate the alternative colors to the targetColor and create the color masks for the 3 frogs
generateOtherColors();
createMasks();

// function that stores the unique colors for the non-target frogs
function generateOtherColors() {
	altColor1 = targetColor;
	altColor2 = targetColor;

	altColor1 = colorList[compareToTargetColor()];
	altColor2 = colorList[compareToTargetColor()];
}

// keep picking a random number until we have unique colors for all 3 frogs
function compareToTargetColor() {

	while ( colorList[ranNum] == targetColor || colorList[ranNum] == altColor1) {
		ranNum = Math.floor(Math.random() * colorList.length);
	}
		
	return ranNum;
}

// function that creates the color masks of our 3 frogs
function createMasks() {

	targetFrog = setTargetMask();
	
	switch(targetFrog) {
		// set left and center frog colors
		case 0:
			document.getElementById("leftFrogMask").style.background = altColor1;
			document.getElementById("leftFrogMask").style.opacity = "0.5";
			document.getElementById("centerFrogMask").style.background = altColor2;
			document.getElementById("centerFrogMask").style.opacity = "0.5";
			break;
		// set right and center frog colors
		case 1:
			document.getElementById("rightFrogMask").style.background = altColor1;
			document.getElementById("rightFrogMask").style.opacity = "0.5";
			document.getElementById("centerFrogMask").style.background = altColor2;
			document.getElementById("centerFrogMask").style.opacity = "0.5";
			break;
		// set left and right frog colors
		case 2:
			document.getElementById("leftFrogMask").style.background = altColor1;
			document.getElementById("leftFrogMask").style.opacity = "0.5";
			document.getElementById("rightFrogMask").style.background = altColor2;
			document.getElementById("rightFrogMask").style.opacity = "0.5";
			break;
	}
	
}

// set the mask of our target frog that we want a user to tap and update the target frog link to go back to the beginning of the book
function setTargetMask() {
	var randomFrog = Math.floor(Math.random() * 3);

	// set our target frog
	switch (randomFrog) {
		case 0:
			document.getElementById("rightFrogMask").innerHTML = '<image id="frogMask1" src="images/scene10_frog1.png" />';
			document.getElementById("rightFrogMask").style.background = targetColor;
			document.getElementById("rightFrogMask").style.opacity = "0.5";

			document.getElementById("rightLink").href = 'p0.xhtml';
			document.getElementById("leftLink").removeAttribute("href"); 
			document.getElementById("centerLink").removeAttribute("href"); 


			return randomFrog;
			break;
		case 1:
			document.getElementById("mymask2").innerHTML = '<image id="frogMask2" src="images/scene10_frog2.png" />';
			document.getElementById("leftFrogMask").style.background = targetColor;
			document.getElementById("leftFrogMask").style.opacity = "0.5";

			document.getElementById("leftLink").href = 'p0.xhtml';
			document.getElementById("rightLink").removeAttribute("href"); 
			document.getElementById("centerLink").removeAttribute("href"); 

			return randomFrog;
			break;
		case 2:
			document.getElementById("mymask3").innerHTML = '<image id="frogMask3" src="images/scene10_frog3.png" />';
			document.getElementById("centerFrogMask").style.background = targetColor;
			document.getElementById("centerFrogMask").style.opacity = "0.5";

			document.getElementById("centerLink").href = 'p0.xhtml';
			document.getElementById("leftLink").removeAttribute("href"); 
			document.getElementById("rightLink").removeAttribute("href"); 

			return randomFrog;
			break;
	}
}

