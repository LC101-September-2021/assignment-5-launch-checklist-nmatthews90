// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let list = document.querySelector("#faultyItems");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  list.style.visibility = "hidden";
  pilotStatus.textContent = "Pilot Ready";
  copilotStatus.textContent = "Co-pilot Ready";
  fuelStatus.textContent = "Fuel level high enough for launch";
  cargoStatus.textContent = "Cargo mass low enough for launch";

  form.addEventListener("submit", function (event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    //let list = document.querySelector("#faultyItems");

    if (
      validateInput(pilotName.value) === "Empty" ||
      validateInput(copilotName.value) === "Empty" ||
      validateInput(fuelLevel.value) === "Empty" ||
      validateInput(cargoMass.value) === "Empty"
    ) {
      alert("All fields are required!");
      event.preventDefault();
    } else if (
      validateInput(fuelLevel.value) === "Not a Number" ||
      validateInput(cargoMass.value) === "Not a Number" ||
      validateInput(pilotName.value) === "Is a Number" ||
      validateInput(copilotName.value) === "Is a Number"
    ) {
      alert("Make sure to enter valid information for each field");
      event.preventDefault();
    } else {
      formSubmission(
        window.document,
        list,
        pilotName.value,
        copilotName.value,
        fuelLevel.value,
        cargoMass.value
      );
      event.preventDefault();
    }
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const randomPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        listedPlanets[randomPlanet].name,
        listedPlanets[randomPlanet].diameter,
        listedPlanets[randomPlanet].star,
        listedPlanets[randomPlanet].distance,
        listedPlanets[randomPlanet].moons,
        listedPlanets[randomPlanet].image
      );
    });
});
