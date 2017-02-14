var numTaps = 0; // holds how many times we have tapped the egg

// our audio for the page
var eggCrackAudio = new Audio('audio/eggShellCrackedSoundEffect.wav');
eggCrackAudio.loop = false;

// our click listener
document.addEventListener('click', function(e) {
    var clickedElement = e.target.id;

    console.log(clickedElement);

    // change the picture of the egg up to 2 taps
    if (clickedElement == "egg") {
        switch (numTaps) {
            case 0:
                document.getElementById("eggImage").innerHTML = '<img src="images/scene1_egg_1_tap.png" alt="scene1_egg_1_tap" id="egg" />';
                eggCrackAudio.play();
                numTaps++;
                break;
            case 1:
                document.getElementById("eggImage").innerHTML = '<img src="images/scene1_egg_2_taps.png" alt="scene1_egg_2_taps" id="egg" />';
                eggCrackAudio.play();
                numTaps++;
                break;
            default:
                // Nada
        }
    }
    
});
