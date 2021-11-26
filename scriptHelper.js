// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty"
  ) {
    alert("All fields are required!");
    event.preventDefault();
  }

  if (
    validateInput(fuelLevel.value) === "Not a Number" ||
    validateInput(cargoLevel.value) === "Not a Number" ||
    validateInput(pilot.value) === "Is a Number" ||
    validateInput(copilot.value) === "Is a Number"
  ) {
    alert("Make sure to enter valid information for each field");
    event.preventDefault();
  }

  if (cargoLevel.value > 10000 && fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch`;
    cargoStatus.textContent = "Cargo mass too heavy for launch";
    fuelStatus.textContent = "Fuel level too low for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.textContent = "Shuttle Not Ready for Launch";
    event.preventDefault();
  } else if (fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch`;
    fuelStatus.textContent = "Fuel level too low for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.textContent = "Shuttle Not Ready for Launch";
    cargoStatus.textContent = "Cargo mass low enough for launch";
    event.preventDefault();
  } else if (cargoLevel.value > 10000) {
    list.style.visibility = "visible";
    pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch`;
    cargoStatus.textContent = "Cargo mass too heavy for launch";
    fuelStatus.textContent = "Fuel level high enough for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.textContent = "Shuttle Not Ready for Launch";
    event.preventDefault();
  }

  if (cargoLevel.value < 10000 && fuelLevel.value > 10000) {
    list.style.visibility = "visible";
    pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch`;
    cargoStatus.textContent = "Cargo mass low enough for launch";
    fuelStatus.textContent = "Fuel level high enough for launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
    launchStatus.textContent = "Shuttle is Ready for Launch";
    //event.preventDefault();
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
