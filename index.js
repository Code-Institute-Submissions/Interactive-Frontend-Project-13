
document.addEventListener("keypress", function (event) {

    makeSound(event.key);


});

/* Set to play each sound on key press using makeSound function */ 

function makeSound(key) {

    switch (key) {
        case "l":
            var lion4 = new Audio("sounds/lion4.wav")
            lion4.play();
            break;
    
        default: console.log(key);
    }
}

