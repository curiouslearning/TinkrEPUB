var offSetX = 0; // holds the x coordinate of where the clicked object is
var offSetY = 0; // holds the y coordinate of where the clicked object is

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