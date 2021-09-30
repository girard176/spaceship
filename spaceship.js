/*
    Author: Andre
    JavaScript for the spaceship website
    API ref: https://lldev.thespacedevs.com/2.2.0/config/spacecraft/
*/

// Variables
const shipDataUrl = "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/?in_use=true&human_rated=true&order=name";
const shipList = document.getElementById("ship-list");
const button = document.getElementById("getShip");

var shipName = document.getElementById("ship-name")
var shipAgency = document.getElementById("ship-agency")
var shipCapability = document.getElementById("ship-capability")
var shipMaidenFlight = document.getElementById("ship-maidenflight")
var shipCrewCapacity = document.getElementById("ship-crewcapacity")
var shipImage = document.getElementById("ship-image")
var shipWiki = document.getElementById("ship-agency")

var shipIndex = 0;

// When the page load
window.addEventListener("load", updateShipList);

// Retreive the spaceships data
async function getShipData(){
    return fetch(shipDataUrl).then(response => response.json());
}

// Add spaceships to drop down list
function updateShipList(){
    getShipData().then(function(data){
            console.log("Ship list: ")
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
    console.log(option.text);
    return option;
}

// When a spaceship is selected from the list
shipList.addEventListener("change", function(){
    let ship = this.value;
    if (ship != "Select a spaceship"){
        console.log("Ship selected: " + ship);
        shipIndex = this.options[this.selectedIndex].index;
        console.log("Ship index: " + shipIndex)
    }
});

// When the button is clicked
button.addEventListener("click", function(){
    console.log("Button clicked")
    selectShipData();
});

// Retreive spaceship data
function selectShipData(){
    getShipData().then(function(data){
        console.log("Ship info: ")
        let shipData = data.results[shipIndex-1];
        shipName = createOption(shipData.name);
        shipAgency = createOption(shipData.agency.name);
        shipCapability = createOption(shipData.capability);
        shipMaidenFlight = createOption(shipData.maiden_flight);
        shipCrewCapacity = createOption(shipData.crew_capacity);
        shipImage = createOption(shipData.image_url);
        shipWiki = createOption(shipData.wiki_link);
    })
}
