function patFunc() {
    alert("You pat P!")
}

// Really basic function, included using onClick method in HTML.
// Just to demonstrate basic knowledge
// I think, even at the lowest level, showing understanding of all concepts
// Is stronger than just knowing the ones that let you achieve your goals..
var getMenuState = document.querySelector(".burg-menu-content");

function menuFunction() {
    if (getMenuState.style.display === "none") {
        getMenuState.style.display = "flex";
    } else {
        getMenuState.style.display = "none";
    }
    
}


// These functions just change colours of the header background if you click on them //
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

// Functions for my Freestyle page, which uses the random-word library //

function freestyleDebug() {
    var fs = document.querySelector(".freestyle-pad-container");
    var fsinputone = console.log(fs.value(fs.firstElementChild));

}
function freestyleDebugTwo(arg1, arg2, arg3) {
    console.log("Called successfully." + arg1 + arg2 + arg3);
}


//Dark Mode, will make it togglable later //
function newDarkMode() {
    var getHTML = document.querySelector("html");
    var getSkillIcon = document.querySelectorAll(".skill-icon");
    var getNavIcon = document.querySelector(".nav-menu-icon");
    var getBdyCtn = document.querySelector(".body-content-container");
    var getLogo = document.querySelector(".left-logo-tile-nav-bar");
    var getSkills = document.querySelector(".skill-nav-container");

    if (getNavIcon.style.backgroundColor = "#fff") {
    getHTML.style.backgroundColor = "#000";
    getHTML.style.color = "#fff";
    getNavIcon.style.color = "#fff";
    getNavIcon.style.backgroundColor = "#000";
    getBdyCtn.style.border = "3px solid #fff";
    getLogo.style.color = "#fff";

    for (i=0; i<getSkillIcon.length; i++) {
        getSkillIcon[i].style.backgroundColor = "#000";
    }
}
}

// pew pew