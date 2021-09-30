/*
    Author: Andre
    JavaScript for the spaceship website
    API ref: https://lldev.thespacedevs.com/2.2.0/config/spacecraft/
*/

// Variables
const shipDataUrl = "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/?in_use=true&human_rated=true&order=name";
const shipList = document.getElementById("ship-list");
const button = document.getElementById("getShip");

var shipIndex = 0;
const shipUrl = "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/10/"
const shipImage = document.getElementById("ship-image")

// When the page load
window.addEventListener("load", updateShipList);

// Retreive the spaceships data
async function getShipData(){
    return fetch(shipDataUrl).then(response => response.json());
}

// Add spaceships to drop down list
function updateShipList(){
    getShipData().then(function(data){
            let option = createOption("Select a spaceship");
            shipList.appendChild(option);
        // Get each ship name
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

// When a spaceship is selected from the list
shipList.addEventListener("change", function(){
    let ship = this.value;
    if (ship != "Select a spaceship"){
        console.log(ship + " selected");
        shipIndex = this.options[this.selectedIndex].index;
        console.log(shipIndex)
    }
});

// When the button is clicked
button.addEventListener("click", function(){
    console.log("Button clicked")
    selectShipData();
});

// Select spaceship data
function selectShipData(){
    getShipData().then(function(data){
        //get ship image
        let image = createOption(data.results[shipIndex-1].image_url);
        console.log(image.innerHTML);
    })
}
