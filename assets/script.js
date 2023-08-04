// Tableau contenant les diapo du carrousel 
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration et initialisation de la variable permettant de savoir quelle diapo est actuellement visible à l'écran parmi celles définies dans le tableau "slides"
let slideNumber = 0


// Appel de l'élément <img> qui contient l'image et appel de l'élément <p> qui contient le texte sous l'image
const bannerImg = document.getElementById("bannerPicture");
const textImg = document.getElementById("bannerTxt");


// Fonction permettant de gérer le changement de diapositive dans le carrousel
function switchSlide(n) {
	const dots = document.querySelectorAll(".dot");

	dots[slideNumber].classList.remove("dot_selected");

	slideNumber += n;
	console.log(slideNumber , "slide number")

	// Séquence d'instructions conditionnelles permettant de gérer le défilement infini 
	if (slideNumber < 0) {
		slideNumber = slides.length - 1;
		console.log(slides.length - 1)
	}
	else if (slideNumber >= slides.length) {
		slideNumber = 0;
	}

   showSlide();
	dots[slideNumber].classList.add("dot_selected");
}

//Fonction permettant de mettre à jour le contenu affiché dans le carrousel en fonction de la diapositive actuelle
function showSlide() {

	//Chemin vers la nouvelle image
	bannerPicture.setAttribute("src", `./assets/images/slideshow/${slides[slideNumber].image}`);

	//Intégration du texte correspondant à l'image en cours de visionnage
	textImg.innerHTML = slides[slideNumber].tagLine;
}



const leftArrow = document.getElementById("leftArrow");

// Ajout de l'event listener sur la flèche gauche  ainsi que du console.log
leftArrow.addEventListener("click", () => {
	console.log("Précédent");

	//Recul d'une slide 
	switchSlide(-1);
}); 

const rightArrow = document.getElementById("rightArrow");

// Ajout de l'event listener sur la flèche droite  ainsi que du console.log
rightArrow.addEventListener("click", () => {
	console.log("Suivant");

	//Avance d'une slide
	switchSlide(1);
}); 


// Boucle permettant d'ajouter les bullet points au slider
for (let i = slideNumber; i < slides.length; i++) {
	const bulletPoint = document.createElement("div");
	bulletPoint.classList.add("dot");
	const bulletPointList = document.querySelector(".dots");
	bulletPointList.appendChild(bulletPoint);

	// Ajout de la class dot_selected au bullet point correspondant à la diapositive en cours de visionnage.
	if (i === slideNumber) {
		bulletPoint.classList.add("dot_selected");
	}
	}

	


