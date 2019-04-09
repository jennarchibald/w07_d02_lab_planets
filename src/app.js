const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const MenuView = require('./views/menu_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const menu = document.querySelector('body > nav.planets-menu');
  const menuView = new MenuView(menu);
  menuView.bindEvents();

  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();

  const section = document.querySelector('body > section.planet-details');
  const planetInfoView = new PlanetInfoView(section);
  planetInfoView.bindEvents();



});
