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


const leftArrow = document.getElementById("leftArrow");

leftArrow.addEventListener("click", () => {
	console.log("Précédent");
});

const rightArrow = document.getElementById("rightArrow");

rightArrow.addEventListener("click", () => {
	console.log("Suivant");
});


let slideNumber = 0


for (let i = slideNumber; i < slides.length; i++) {
	const bulletPoint = document.createElement("div");
	bulletPoint.classList.add("dot");
	const bulletPointList = document.querySelector(".dots");
	bulletPointList.appendChild(bulletPoint);
	if (i === slideNumber) {
		bulletPoint.classList.add("dot_selected");
	}
	}


