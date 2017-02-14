// our click listener
document.addEventListener('click', function(e) {
    var clickedElement = e.target.id;

    console.log(clickedElement);
    
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