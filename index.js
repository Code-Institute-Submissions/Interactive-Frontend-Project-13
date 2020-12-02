/* W3 Side Nav Example - used for video stream */
/* Set the width of the side navigation to 550px */

function openNav() {
    closeRightNav();
    document.getElementById("mySidenav").style.width = "550px";
    document.getElementById("mySidenav").style.left = "0";
}

/* Implementation of API Call using a simple AJAX command to request data via the API */
/* Using the public National Geographic API, the config provides api-user api-key with URL.  The function calls the API to fetch the
   image and displays it in the sideNav - this image changes daily */ 

apiCallToGetImage();

function apiCallToGetImage() {
    $.ajax({
    url: 'https://api.nationalgeographic.com/distribution/feed/v1?format=jsonapi&content_type=featured_image&fields=image,uri&collection=fd5444cc-4777-4438-b9d4-5085c0564b44',
    method: 'get',
    headers: {
        'apiauth-apiuser': 'pod_archive',
        'apiauth-apikey': '9fa5d22ad7b354fe0f9be5597bcf153df56e2ca5',
      },
    success: function(data) {
        document.getElementById('photoOfTheDay').src = data.data[0].attributes.image.uri; 
        document.getElementById('photoOfTheDay2').src = data.data[1].attributes.image.uri;

    }
    });
}


/* Set the width of the side navigation to 0 when closing*/

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openRightNav() {
    closeNav();
    document.getElementById("myRightNav").style.width = "550px";
    document.getElementById("myRightNav").style.right = "0";
}


/* Set the width of the side navigation to 0 when closing*/

function closeRightNav() {
    document.getElementById("myRightNav").style.width = "0";
}


/* Set the number of Animal Cards, add eventListener, using loop */

var numberOfAnimals = document.querySelectorAll(".animal").length;

for (var i = 0; i < numberOfAnimals; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() {
    
    var keyHTML = this.innerHTML;
    makeSound(keyHTML);
});
 }


/* Function to Play sound at keypress */

 document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    });


/* Set to play each sound on key press using makeSound function */ 

var animal_audio = null;

function makeSound(key) {
    var inital_key = key.charAt(0).toLowerCase();
    
    switch (inital_key) {
        case "l":
            var lion4 = new Audio("sounds/lion4.wav");
            lion4.play();
            animal_audio = lion4;
            break;
        
        case "e":
            var elephant = new Audio("sounds/elephant.wav");
            elephant.play();
            animal_audio = elephant;
            break;

        case "f":
            var frog = new Audio("sounds/frog.wav");
            frog.play();
            animal_audio = frog;
            break;


        case "b":
            var bear = new Audio("sounds/bearsound.wav");
            bear.play();
            animal_audio = bear;
            break;   

        case "m":
            var monkey = new Audio("sounds/monkey2.wav");
            monkey.play();
            animal_audio = monkey;
            break;   

        case "h":
            var hippo = new Audio("sounds/hippo1.wav");
            hippo.play();
            animal_audio = hippo;
            break;   
        default: console.log(key);
    }


/* Stop sound function */

}

function stopSound(){
    animal_audio.pause();
    animal_audio=null;
}


// Opens a the same modal but uses an array to store the required data as selected by the user.  The data is dynamic and passed to the modal when the user clicks on any card.

function openModal(type) {
	$('#modal').modal('show');
	var arr = [
	{
 		name : 'L',
 		attributes: "<p>Lions are the only cats that live in groups.  A group, or pride, can be up to 30 lions, depending on how much food and water is available.  Female lions are the main hunters. While they’re out looking for food, the males guard the pride’s territory and their young. </p>"
	
	},
	{
 		name : 'E',
 		attributes: "<p>Elephants belong to the mammal family, which means that they have hair, give birth to live young, and feed their babies milk. They have large, thin ears that are used to help cool them down, and have long, powerful trunks. </p>"
	},
	{
 		name : 'F',
 		attributes: "<p>Frogs are amphibians. They can be found near water but prefer ponds, lakes, and marshes. You will not find any in Antarctica. They lay eggs called Frog Spawn. Their eggs hatch into tadpoles. A group of frogs is called an army. </p>"
	},
	{
 		name : 'B',
 		attributes: "<p>Koalas are not bears. The dawn bear was the first bear. In the north, bears sleep in the winter, but they don't hibernate. Bears are related to walruses, seals and sea lions.  Bears can see color. Not all mammals can.  Giant Panda are classified as a bear. </p>"
	},
	{
 		name : 'M',
		attributes: "<p>There are currently 264 known monkey species. Monkeys can be divided into two groups, Old World monkeys that live in Africa and Asia, and New World monkeys that live in South America. A baboon is an example of an Old World monkey, while a marmoset is an example of a New World monkey. </p>"
	},

	{
 		name : 'H',
 		attributes: "<p>Hippo's Cannot Swim.  Shocking! They Have Incredibly Sensitive Skin. They Cannot Breathe Underwater. Hippos Are Territorial – But Only In Water. They Are Not Big Eaters. Hippos Have A British Connection. </p>"
	},
	]; 

    
// This code ensures that any data is removed and variables are empty, after a selection has been made.

	var obj = arr.find(function(data) {
		return data.name === type;
	});
	$('#inputData').html('');
	$('#inputData').html(obj.attributes);
    
}

