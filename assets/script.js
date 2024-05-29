const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const img = document.querySelector(".banner-img");
const text = document.querySelector("#banner p")
const arrowright = document.querySelector(".suivant")
const arrowleft = document.querySelector(".precedent")
const dots = document.querySelector(".dots")
let index=0


function displaydots() {
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement ("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if ( i == index) {
			dot.classList.add("dot_selected")
		}
	}
}
displaydots();

function clickarrowleft() {
	arrowleft.addEventListener("click", () => {
		const newdots = document.querySelectorAll(".dot");
		newdots[index].classList.remove("dot_selected");
		console.log(index)
		index --;
		if (index < 0) {
			index = slides.length - 1;
		}
		newdots[index].classList.add("dot_selected");
		img.src = slides[index].image;
		text.innerHTML = slides[index].tagLine;
	})
}
clickarrowleft();


function clickarrowright() {
	arrowright.addEventListener("click", () => {
		const newdots = document.querySelectorAll(".dot");
		newdots[index].classList.remove("dot_selected");
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}
		newdots[index].classList.add("dot_selected");
		img.src = slides[index].image;
		text.innerHTML = slides[index].tagLine;
	})
}
clickarrowright();


