var numTaps = 0; // holds how many times we have tapped the egg
var startTime = new Date(); // holds when we first enter the activity
//alert(startTime);

// a RegEx for matching words to narrate based on their ID
var narrationWordMatch = new RegExp("^smil");

// our audio for the page
var eggCrackAudio = new Audio('audio/eggShellCrackedSoundEffect.wav');
eggCrackAudio.loop = false;

// our narration audio as a sprite
var narration = new Howl({
  src: ['audio/scene1_child_stanza.mp3'],
  sprite: {
    all: [0000, 4565],
    smil_p1w1: [0125, 1000],
    smil_p1w2: [1095, 900],
    smil_p1w3: [1995, 1780],
    smil_p1w4: [3775, 790]
  }

});

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
    // test to see if the clickedElement matches a word we should narrate
    else if (narrationWordMatch.test(clickedElement)) {
        playSoundAndChangeCSS(clickedElement);
    }
    else if (clickedElement == "readAloud")
        playAll(1, 4);
});
