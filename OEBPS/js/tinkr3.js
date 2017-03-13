var offSetX = 0; // holds the x coordinate of where the clicked object is
var offSetY = 0; // holds the y coordinate of where the clicked object is

// a RegEx for matching words to narrate based on their ID
var narrationWordMatch = new RegExp("^smil");

// our narration audio as a sprite
var narration = new Howl({
  src: ['audio/scene3_duck_stanza.mp3'],
  sprite: {
    all: [0000, 9935],
    smil_p3w1: [0288, 0450],
    smil_p3w2: [0738, 0725],
    smil_p3w3: [1500, 0725],
    smil_p3w4: [2133, 0967],
    smil_p3w5: [3100, 0434],
    smil_p3w6: [3534, 0181],
    smil_p3w7: [3715, 0120],
    smil_p3w8: [3835, 1470],
    smil_p3w9: [5305, 0295],
    smil_p3w10: [5695, 0550],
    smil_p3w11: [6275, 0360],
    smil_p3w12: [6635, 1050],
    smil_p3w13: [7725, 0430],
    smil_p3w14: [8155, 0160],
    smil_p3w15: [8275, 0450],
    smil_p3w16: [8635, 1300]
  }
});

function startDrag(e) {
	// determine event object
	if (!e) {
		var e = window.event;
	}
	// set our target
	var targ = e.target;

	// if it isn't the div containing our top shell... stop!
	if (targ.className != 'dragme') {return};

	// calculate event X, Y coordinates
	offsetX = e.clientX;
	offsetY = e.clientY;

	// assign default values for top and left properties
	if (!targ.style.left) { targ.style.left='0px'};
	if (!targ.style.top) { targ.style.top='0px'}; 

	// calculate integer values for top and left properties
	coordX = parseInt(targ.style.left);
	coordY = parseInt(targ.style.top);
	drag = true;

	// move div element
	document.onmousemove = dragDiv;

	return false;		
}

// start moving the dragged div based on the position of the mouse
function dragDiv(e) {
	if (!drag) {return};
	if (!e) { var e = window.event};

	var targ = e.target;

	if (targ.className != 'dragme') {return};

	// move div element
	targ.style.left = coordX + e.clientX - offsetX + 'px';
	targ.style.top = coordY + e.clientY - offsetY + 'px';

	return false;
}

function stopDrag() {
	drag = false;
}

window.onload = function() {
	document.onmousedown = startDrag;
	document.onmouseup = stopDrag;
}

// our click listener
document.addEventListener('click', function(e) {
    var clickedElement = e.target.id;

    console.log(clickedElement);

    // test to see if the clickedElement matches a word we should narrate
    if (narrationWordMatch.test(clickedElement)) {
        playSoundAndChangeCSS(clickedElement);
    }
    else if (clickedElement == "readAloud")
    	playAll(3, 16);
});