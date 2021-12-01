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

  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(fuelLevel.value) === "Not a Number" ||
    validateInput(cargoLevel.value) === "Not a Number" ||
    validateInput(pilot.value) === "Is a Number" ||
    validateInput(copilot.value) === "Is a Number"
  ) {
    alert("Make sure to enter valid information for each field");
  } else {
    pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch`;

    if (fuelLevel.value < 10000) {
      fuelStatus.textContent = "Fuel level too low for launch";
      ready = false;
    } else {
      fuelStatus.textContent = "Fuel level high enough for launch";
    }

    if (cargoLevel.value > 10000) {
      cargoStatus.textContent = "Cargo mass too heavy for launch";
      ready = false;
    } else {
      cargoStatus.textContent = "Cargo mass low enough for launch";
    }

    if (ready) {
      list.style.visibility = "visible";
      launchStatus.style.color = "rgb(65, 159, 106)";
      launchStatus.textContent = "Shuttle is Ready for Launch";
    } else {
      list.style.visibility = "visible";
      launchStatus.style.color = "rgb(199, 37, 78)";
      launchStatus.textContent = "Shuttle Not Ready for Launch";
    }
  }

  event.preventDefault();
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
  let randomPlanet = Math.round(Math.random() * planets.length);
  return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
