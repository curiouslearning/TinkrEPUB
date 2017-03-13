// a RegEx for matching words to narrate based on their ID
var narrationWordMatch = new RegExp("^smil");

// our narration audio as a sprite
var narration = new Howl({
  src: ['audio/scene2_duck_stanza.mp3'],
  sprite: {
    all: [0000, 10935],
    smil_p2w1: [0245, 1890],
    smil_p2w2: [2135, 1520],
    smil_p2w3: [3655, 0260],
    smil_p2w4: [3915, 0570],
    smil_p2w5: [4485, 1600],
    smil_p2w6: [6085, 0360],
    smil_p2w7: [6445, 0880],
    smil_p2w8: [7325, 0470],
    smil_p2w9: [7795, 1390],
    smil_p2w10: [9185, 0590],
    smil_p2w11: [9775, 0210],
    smil_p2w12: [9985, 0950]
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
        playAll(2, 12);
});
