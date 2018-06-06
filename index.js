// acciones posibles:
// dormir
// comer

// maximo descanso = 50 luego ya no quiere dormir 
// maxima comida = 50 mas de eso y se muere
// cada segundo, el descando baja en 1 y la comida baja en 1
// descanso = 0 o comida = 0, el tamagotchi se muere
// accion comer incrementa comida en 10
// accion dormir incrementa descanso en 10

// mostrar en pantalla todos los stats del tamagotchi

// State
var sleepingPoints = 50;
var eatingPoints = 50;
var alive = true;

//Global Variables
var $sleepButton = document.querySelector("#sleepButton");
var $eatButton = document.querySelector("#eatButton");
var $sleepDisplay = document.querySelector("#sleepDisplay");
var $eatDisplay = document.querySelector("#eatDisplay");
var $lifeStatusDisplay = document.querySelector("#lifeStatusDisplay");
var $startButton = document.querySelector("#start");
var $petDisplay = document.querySelector("#petDisplay");

// $startButton.addEventListener("click", myFunction);
// myFunction should execute setInterval() but how can I use numToStop outside of it? 

var numToStop = setInterval(function() {
	sleepingPoints--;
	$sleepDisplay.textContent = sleepingPoints;
	eatingPoints--;
	$eatDisplay.textContent = eatingPoints;
	if(sleepingPoints === 0 || eatingPoints === 0) {
		clearInterval(numToStop);
		$lifeStatusDisplay.textContent = "Dead";
		$lifeStatusDisplay.classList.remove("alive");
		$lifeStatusDisplay.classList.add("dead");
		alive = false;
	}
}, 1000);

$sleepButton.addEventListener("click", function() {
	if(alive === false) {
		alert("Your TAMAGOTCHI is dead! XXX");
	} else {
		sleepingPoints += 10;
		if (sleepingPoints > 50) {
			sleepingPoints = 50;
		}
		sleepDisplay.textContent = sleepingPoints;
	}
});

$eatButton.addEventListener("click", function() {
	if(alive === false) {
		alert("Your TAMAGOTCHI is dead! XXX");
	} else {
		eatingPoints += 10;
		eatDisplay.textContent = eatingPoints;
		if(eatingPoints > 50) {
			clearInterval(numToStop);
			$lifeStatusDisplay.textContent = "Dead";
			$lifeStatusDisplay.classList.remove("alive");
			$lifeStatusDisplay.classList.add("dead");
			alive = false;
		}
	}
});

$petDisplay.addEventListener("mouseover", function() {
	this.setAttribute("src", "img/smiling-dog.jpeg")
});

$petDisplay.addEventListener("mouseout", function() {
	this.setAttribute("src", "img/sleeping-dog.jpeg")
});
