const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('MenuView:clicked-planet', (event)=>{
    const planetName = event.detail;
    // console.log(planetName);
    const planet = this.planetData(planetName);
    // console.log(planet);
    PubSub.publish('SolarSystem:Planet-info', planet);

  })
};

SolarSystem.prototype.planetData = function (planetName) {
  let foundPlanet;
  this.planets.forEach((planet)=>{
    if (planet.name === planetName) {
      foundPlanet = planet;
    }
  });
  return foundPlanet;
};

module.exports = SolarSystem;

//
