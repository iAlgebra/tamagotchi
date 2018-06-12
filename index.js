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

// Constants
const MAX_EATING_POINTS = 50;
const MAX_SLEEPING_POINTS = 50;
const MIN_AGE = 10;
const MAX_AGE = 18;
const MAX_LIFE_YEARS = Math.round(Math.random() * (MAX_AGE - MIN_AGE) + MIN_AGE);

// State
var sleepingPoints = 50;
var eatingPoints = 50;
var age= 0;
var alive = true;

//Global Variables
var $sleepButton = document.querySelector("#sleepButton");
var $eatButton = document.querySelector("#eatButton");
var $sleepDisplay = document.querySelector("#sleepDisplay");
var $eatDisplay = document.querySelector("#eatDisplay");
var $ageDisplay = document.querySelector("#ageDisplay");
var $lifeStatusDisplay = document.querySelector("#lifeStatusDisplay");
var $petDisplay = document.querySelector("#petDisplay");

function die() {
	clearInterval(numToStop);
	$lifeStatusDisplay.textContent = "Dead";
	$lifeStatusDisplay.classList.remove("alive");
	$lifeStatusDisplay.classList.add("dead");
	$petDisplay.setAttribute("src", "img/coffin.jpg");
	alive = false;
}

var numToStop = setInterval(function() {
	sleepingPoints--;
	$sleepDisplay.textContent = sleepingPoints;
	eatingPoints--;
	$eatDisplay.textContent = eatingPoints;
	age++;
	$ageDisplay.textContent = age;
	if(sleepingPoints === 0 || eatingPoints === 0 || age === MAX_LIFE_YEARS) {
		die();
	}
}, 1000);

$sleepButton.addEventListener("click", function() {
	if(alive === false) {
		alert("Your TAMAGOTCHI is dead! XXX");
	} else {
		sleepingPoints += 10;
		if (sleepingPoints > MAX_SLEEPING_POINTS) {
			sleepingPoints = MAX_SLEEPING_POINTS;
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
		
		if(eatingPoints > MAX_EATING_POINTS) {
			die();
		} else {
			$petDisplay.setAttribute("src", "img/eating-dog.jpg");
			setTimeout(function(){
				if(alive) {
					$petDisplay.setAttribute("src", "img/sleeping-dog.jpg");
				}
			}, 1000);
		}
	}
});

$petDisplay.addEventListener("mouseover", function() {
	if(alive) {
		this.setAttribute("src", "img/smiling-dog.jpg");
	}
});

$petDisplay.addEventListener("mouseout", function() {
	if (alive) {
		this.setAttribute("src", "img/sleeping-dog.jpg");
	}
});
