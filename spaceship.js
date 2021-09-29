/*
    Author: Andre
    JavaScript for the spaceship website
    API ref: https://lldev.thespacedevs.com/2.2.0/config/spacecraft/
*/

// variables
const shipListUrl = "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/?in_use=true&human_rated=true&order=name";
const shipList = document.getElementById("ship-list");
const button = document.getElementById("getShip");
const shipID = 10;
const shipUrl = "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/10/"
const shipImage = document.getElementById("ship-image")

// when the page load
window.addEventListener("load", updateShipList);

// retreive the list of spaceships
async function getShipList(){
    return fetch(shipListUrl).then(response => response.json());
}

// add spaceships to drop down list
function updateShipList(){
    getShipList().then(function(data){
            let option = createOption("Select a spaceship");
            shipList.appendChild(option);
        //get each ship name
            for(element in data.results){
                let option = createOption(data.results[element].name);
                shipList.appendChild(option);
            }
        }
    );
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}

// when a spaceship is selected from the list
shipList.addEventListener("change", function(){
    console.log(this.value);
});

// when the button is clicked
button.addEventListener("click", updateShipData);

// retrieve spaceship data
async function getShipData(){
    return fetch(shipUrl).then(response => response.json());
}

// update spaceship data
function updateShipData(){
    getShipData().then(function(data){
        console.log("Clicked!");
        //get ship image
        let image = createOption(data.image_url);
        console.log(image.innerHTML);
            })
        }