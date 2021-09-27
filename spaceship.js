/*
    Author: Andre
    JavaScript for the spaceship website
*/

// variables
const shipListUrl = "https://ll.thespacedevs.com/2.2.0/config/spacecraft/";
const shipList = document.getElementByID("ship-list"); 

// when the page load
window.addEventListener("load", );

// retreive the list of spaceships
function getShipList(){
    return fetch(shipListUrl);
}

// add spaceships to drop down list
function updateShipList(){
    getShipList().then(function(data)
        //get ship name
        //append to the select list
    )
}