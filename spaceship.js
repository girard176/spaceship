/*
    Author: Andre
    JavaScript for the spaceship website
    API ref: https://thespacedevs.com/llapi
*/

// variables
const shipListUrl = "https://ll.thespacedevs.com/2.2.0/config/spacecraft/?name=&manufacturer=&in_use=true&human_rated=";
const shipList = document.getElementById("ship-list"); 

// when the page load
window.addEventListener("load", updateShipList);

// retreive the list of spaceships
async function getShipList(){
    return fetch(shipListUrl).then(response => response.json());
}

// add spaceships to drop down list
function updateShipList(){
    getShipList().then(function(data){
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
