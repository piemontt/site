const mainButton = document.getElementById('main-button');
const offerButton = document.getElementById('offer-button');
const contactsButton = document.getElementById('contacts-button');
const aboutButton = document.getElementById('about-button');

offerButton.addEventListener("click", () => {window.scrollTo(0,150)});
mainButton.addEventListener("click", () => {window.scrollTo(0,0)});
contactsButton.addEventListener("click", () => {window.scrollTo(0,150)});
aboutButton.addEventListener("click", () => {window.scrollTo(0,0)});
