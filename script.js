const mainButton = document.getElementById('main-button');
const offerButton = document.getElementById('offer-button');
const contactsButton = document.getElementById('contacts-button');
const aboutButton = document.getElementById('about-button');
const logo = document.querySelector('.logo')
const buttonUp = document.querySelector('.buttonup')

buttonUp.addEventListener("click", () => {window.scrollTo(0,0)});
offerButton.addEventListener("click", () => {window.scrollTo(0,150)});
mainButton.addEventListener("click", () => {window.scrollTo(0,0)});
contactsButton.addEventListener("click", () => {window.scrollTo(0,150)});
aboutButton.addEventListener("click", () => {window.scrollTo(0,0)});
logo.addEventListener("click", () => {window.scrollTo(0,0)});
window.addEventListener("scroll", 
	()=> {
	if (window.scrollY > 100) {
        buttonUp.classList.add("buttonup-active");
    	} else {
        buttonUp.classList.remove("buttonup-active");
    	}
	}
)

