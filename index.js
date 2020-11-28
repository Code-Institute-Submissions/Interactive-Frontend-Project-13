
/* W3 Side Nav Example - used for video stream */
/* Set the width of the side navigation to 550px */
function openNav() {
    document.getElementById("mySidenav").style.width = "550px";
}

/* Set the width of the side navigation to 0 when closing*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Set the number of Animal Cards, add eventListener */
var numberOfAnimals = document.querySelectorAll(".animal").length;

 for (var i = 0; i < numberOfAnimals; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() {
    
    var keyHTML = this.innerHTML;
    makeSound(keyHTML);
});
 }

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    });

/* Set to play each sound on key press using makeSound function */ 
var animal_audio = null;
function makeSound(key) {
    inital_key = key.charAt(0).toLowerCase();
    switch (inital_key) {
        case "l":
            var lion4 = new Audio("sounds/lion4.wav");
            lion4.play();
            animal_audio = lion4;
            break;
        
        case "e":
            var elephant = new Audio("sounds/elephant.wav")
            elephant.play();
            animal_audio = elephant;
            break;

        case "f":
            var frog = new Audio("sounds/frog.wav")
            frog.play();
            animal_audio = frog;
            break;


        case "b":
            var bear = new Audio("sounds/bearsound.wav")
            bear.play();
            animal_audio = bear;
            break;   

        case "m":
            var monkey = new Audio("sounds/monkey2.wav")
            monkey.play();
            animal_audio = monkey;
            break;   

        case "h":
            var hippo = new Audio("sounds/hippo1.wav")
            hippo.play();
            animal_audio = hippo;
            break;   
        default: console.log(key);
    }


}

function stopSound(){
    animal_audio.pause();
    animal_audio=null;
}


//Data retrieval for Modal container test - using an array to hold data for Modal.  Eventually this array will hold all the data for each Animal and can be expanded to hold other elements too.

function openModal(type) {
	$('#modal').modal('show');
	var arr = [
	{
 		name : 'L',
 		attributes: "<p>Lions are the only cats that live in groups.  A group, or pride, can be up to 30 lions, depending on how much food and water is available.  Female lions are the main hunters. While they’re out looking for food, the males guard the pride’s territory and their young. </p>"
	
	}
	] 

	var obj = arr.find(function(data) {
		return data.name === type;
	})
	$('#inputData').html('');
	$('#inputData').html(obj.attributes);

	
}
