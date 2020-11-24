
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

function makeSound(key) {

    switch (key) {
        case "l":
            var lion4 = new Audio("sounds/lion4.wav")
            lion4.play();
            break;l
        
        case "e":
            var elephant = new Audio("sounds/elephant.wav")
            elephant.play();
            break;

        case "f":
            var frog = new Audio("sounds/frog.wav")
            frog.play();
            break;


        case "b":
            var bear = new Audio("sounds/bearsound.wav")
            bear.play();
            break;   

        case "m":
            var monkey = new Audio("sounds/monkey2.wav")
            monkey.play();
            break;   

        case "h":
            var hippo = new Audio("sounds/hippo1.wav")
            hippo.play();
            break;   
        default: console.log(key);
    }


}

//Data retrieval for Modal container test

    $(document).on("click", ".open-modal", function () {
        var myHeading = "<p>Lions are the only cats that live in groups.  A group, or pride, can be up to 30 lions, depending on how much food and water is available.  Female lions are the main hunters. While they’re out looking for food, the males guard the pride’s territory and their young. </p>";
        var myElephant = "<p>Elephants belong to the mammal family, which means that they have hair, give birth to live young, and feed their babies milk. They have large, thin ears that are used to help cool them down, and have long, powerful trunks. </p>";
        var myFrog = "<p>Frogs are amphibians. They can be found near water but prefer ponds, lakes, and marshes. You will not find any in Antarctica. They lay eggs called Frog Spawn. Their eggs hatch into tadpoles. A group of frogs is called an army. </p>";
        var myBear = "<p>Koalas are not bears. The dawn bear was the first bear. In the north, bears sleep in the winter, but they don't hibernate. Bears are related to walruses, seals and sea lions.  Bears can see color. Not all mammals can.  Giant Panda are classified as a bear. </p>";
        var myMonk = "<p>There are currently 264 known monkey species. Monkeys can be divided into two groups, Old World monkeys that live in Africa and Asia, and New World monkeys that live in South America. A baboon is an example of an Old World monkey, while a marmoset is an example of a New World monkey. </p>";
        var myHipp = "<p>Hippo's Cannot Swim.  Shocking! They Have Incredibly Sensitive Skin. They Cannot Breathe Underwater. Hippos Are Territorial – But Only In Water. They Are Not Big Eaters. Hippos Have A British Connection. </p>";

        $("#modal-body").html(myHeading);
        $("#modal-body").html(myElephant);   
        $("#modal-body").html(myFrog);
        $("#modal-body").html(myBear);
        $("#modal-body").html(myMonk);
        $("#modal-body").html(myHipp);

        $('#modal').modal('show');
        
        
    });


