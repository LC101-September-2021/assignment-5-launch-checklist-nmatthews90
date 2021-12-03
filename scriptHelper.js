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
  let missionTarget = document.getElementById("missionTarget");

  missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
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
  let ready = true;
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
  copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

  if (Number(fuelLevel) < Number(10000)) {
    fuelStatus.textContent = "Fuel level too low for launch";
    ready = false;
  } else {
    fuelStatus.textContent = "Fuel level high enough for launch";
  }

  if (Number(cargoLevel) > Number(10000)) {
    cargoStatus.textContent = "Cargo mass too heavy for launch";
    ready = false;
  } else {
    cargoStatus.textContent = "Cargo mass low enough for launch";
  }

  if (ready) {
    launchStatus.style.color = "rgb(65, 159, 106)";
    launchStatus.textContent = "Shuttle is Ready for Launch";
  } else {
    list.style.visibility = "visible";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.textContent = "Shuttle Not Ready for Launch";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return Math.round(Math.random() * planets.length);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
