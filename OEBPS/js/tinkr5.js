// a RegEx for matching words to narrate based on their ID
var narrationWordMatch = new RegExp("^smil");

// our narration audio as a sprite
var narration = new Howl({
  src: ['audio/scene8_duck_stanza_white.mp3'],
  sprite: {
    all: [0000, 4205],
    smil_p5w1: [0105, 272],
    smil_p5w2: [0377, 218],
    smil_p5w3: [0595, 1620],
    smil_p5w4: [2215, 0383],
    smil_p5w5: [2598, 0357],
    smil_p5w6_white: [2955, 1250]
  }

});

// our click listener
document.addEventListener('click', function(e) {
    var clickedElement = e.target.id;

    console.log(clickedElement);

    // test to see if the clickedElement matches a word we should narrate
    if (narrationWordMatch.test(clickedElement)) {
        playSoundAndChangeCSS(clickedElement);
    }
    else if (clickedElement == "readAloud")
        playAll(5, 6);
    
});

var duckColor = localStorage.getItem("duckColor"); // takes what color was selected on the previous page from localStorage

// color the duck body mask and insert the color into the text based on what was previously chosen
switch(duckColor) {
	case "brown":
		document.getElementById("smil_p5w6").innerHTML = "brown";
		document.getElementById("smil_p5w6").setAttribute("id", "smil_p5w6_brown");
		document.getElementById("duck_body2").style.background = "rgba(130, 81, 38, 0.7)";
		break;
	case "orange":
		document.getElementById("smil_p5w6").innerHTML = "orange";
		document.getElementById("smil_p5w6").setAttribute("id", "smil_p5w6_orange");
		document.getElementById("duck_body2").style.background = "rgba(238, 154, 51, 0.7)";
		break;
	case "red":
		document.getElementById("smil_p5w6").innerHTML = "red";
		document.getElementById("smil_p5w6").setAttribute("id", "smil_p5w6_red");
		document.getElementById("duck_body2").style.background = "rgba(238, 34, 38, 0.7)";
		break;
	case "white":
		document.getElementById("smil_p5w6").innerHTML = "white";
		document.getElementById("smil_p5w6").setAttribute("id", "smil_p5w6_white");
		break;
	case "yellow":
		document.getElementById("smil_p5w6").innerHTML = "yellow";
		document.getElementById("smil_p5w6").setAttribute("id", "smil_p5w6_yellow");
		document.getElementById("duck_body2").style.background = "rgba(237, 245, 83, 0.7)";
		break;
	default:
		// nada
}