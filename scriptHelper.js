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
  if (!isNaN(testInput)) {
    return "Is a Number";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (testInput === "") {
    return "Empty";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let form = document.querySelector("testForm");
  form.addEventListener("submit", function (event) {
    let pilotName = String(document.querySelector("input[name=pilotName]"));
    let copilotName = String(document.querySelector("input[name=copilotName]"));
    let fuelLevel = Number(document.querySelector("input[name=fuelLevel]"));
    let cargoMass = Number(document.querySelector("input[name=cargoMass]"));
    // Checking to make sure the form elements have values
    if (
      pilotName.value === "" ||
      copilotName.value === "" ||
      fuelLevel.value === "" ||
      cargoMass.value === ""
    ) {
      alert("All fields are required!");
      event.preventDefault();
    }
  });
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
