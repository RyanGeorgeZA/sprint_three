const imageSlideshow = document.querySelector(".image-slideshow"); //store div with class name ".image-slideshow" in a const variable
const slideshowImages = document.querySelectorAll(".image-slideshow img"); //store all images contained within the div with class name ".image-slideshow" in a const variable

//Next and Previous image buttons
const prevButton = document.querySelector("#prevButton"); //store HTML element with id="prevButton" in a const variable
const nextButton = document.querySelector("#nextButton"); //store HTML element with id="nextButton" in a const variable

//Counter
let counter = 1; //to start counter on first image
const size = slideshowImages[0].clientWidth; //stores the width of the first element in the slideshowImages variable in a const variable named size

imageSlideshow.style.transform = "translateX(" + (-size * counter) + "px)"; //first image will shift horizontally by how much pixels its width is

//Functions that will be invoked using onclick event handlers
function nextImage() {
    if (counter >= slideshowImages.length - 1) return;
    imageSlideshow.style.transition = "0.5s ease-in-out"; //setting transition for how the images will slide
    counter++;
    imageSlideshow.style.transform = "translateX(" + (-size * counter) + "px)";
}

function prevImage() {
    if (counter <= 0) return;
    imageSlideshow.style.transition = "0.5s ease-in-out"; 
    counter--;
    imageSlideshow.style.transform = "translateX(" + (-size * counter) + "px)";
}

imageSlideshow.addEventListener("transitionend", () => {
    console.log(slideshowImages[counter]);
    if (slideshowImages[counter].id == "lastClone") {
        imageSlideshow.style.transition = "none";
        counter = slideshowImages.length - 2;
        imageSlideshow.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (slideshowImages[counter].id == "firstClone") {
        imageSlideshow.style.transition = "none";
        counter = slideshowImages.length - counter;
        imageSlideshow.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});

function arrowHighlight(object, value) {
    if (value == 'mouseover') {
        document.getElementById(object).style.background = "black";
    }
    else if (value == "mouseout") {
        document.getElementById(object).style.background = "none";
    }
}
