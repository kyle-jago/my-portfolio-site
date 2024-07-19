
function patFunc() {
    alert("You pat P!")
}

// Really basic function, included using onClick method in HTML.
// Just to demonstrate basic knowledge
// I think, even at the lowest level, showing understanding of all concepts
// Is stronger than just knowing the ones that let you achieve your goals..

function menuFunction() {

    var getMenuIcon = document.querySelector('.burg-menu-content')
    getMenuIcon.style.display = "block";
}

function fireIcon() {  
    var getBanner = document.querySelector(".body-hero-content-container");
    var getIcons = document.querySelectorAll(".skill-icon");
    let fireArray = Array.from(getIcons);


    fireArray.forEach((element) => element.style.color = "#FF6500");
    getBanner.style.backgroundImage = "linear-gradient(45deg, #FF6500, #C40C0C)";
}

function brainIcon() {
    var getBanner = document.querySelector(".body-hero-content-container");
    var getIcons = document.querySelectorAll(".skill-icon");
    let fireArray = Array.from(getIcons);


    fireArray.forEach((element) => element.style.color = "#E6739F");
    getBanner.style.backgroundImage = "linear-gradient(45deg, #E6739F, #CC0E74)";
}

function boxIcon() {
    var getBanner = document.querySelector(".body-hero-content-container");
    var getIcons = document.querySelectorAll(".skill-icon");
    let fireArray = Array.from(getIcons);


    fireArray.forEach((element) => element.style.color = "#AF8F6F");
    getBanner.style.backgroundImage = "linear-gradient(45deg, #AF8F6F, #74512D)";
}