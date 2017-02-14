var imageNumber = 0; // to toggle back and forth between the two keyframes

// initialize our audio
var eggTapAudio = new Audio('audio/tapSoundEffect.wav');
eggTapAudio.loop = false;

// our click listener
document.addEventListener('click', function(e) {
    var clickedElement = e.target.id;

    console.log(clickedElement);
    
});

// the following function switches between the two keyframes and plays audio when appropriate
function eggTimer() {
    if(imageNumber == 0) {
        document.getElementById("tapMe").innerHTML = '<img src="images/hand_and_egg_2.png" id="handEgg" />';
        eggTapAudio.play();     
        imageNumber = 1;
    }
    else {
        document.getElementById("tapMe").innerHTML = '<img src="images/hand_and_egg_1.png" id="handEgg" />'; 
        imageNumber = 0;
    }  
    
}

setInterval(eggTimer, 600); // animate every 600ms