// message in the console
console.log("Hi there, welcome to the JavaScript console!");

// initialize the application
var app = new Object();

app.shakePokeball = function shakePokeball() {
    // code BELOW this line for challenge #1 -->
    let pokeballElement = document.getElementById("pokeball");
    pokeballElement.className = "shake";
} // <-- code ABOVE this line for challenge #1

app.setName = function setName() {
    // code BELOW this line for challenge #2 -->
    let nameInput = prompt("What is your name?");
    let firstName = document.getElementById("first-name");
    firstName.innerHTML = nameInput;
} // <-- code ABOVE this line for challenge #2

app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->
    let favSite = prompt("What is your favorite website?");
    let favSiteElement = document.getElementById("favorite-website");
    let favSiteWithLink = "<a href=" + "\"" + "http://" + favSite + ".com\"" + ">" + favSite + "</a>";
    favSiteElement.innerHTML = favSiteWithLink;
} // <-- code ABOVE this line for challenge #3 & bonus
