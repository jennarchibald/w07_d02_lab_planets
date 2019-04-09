const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (section) {
  this.section = section;
};

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:Planet-info', (event)=>{
    this.clearInfo();
    this.displayInfo(event.detail);
  });
};

PlanetInfoView.prototype.displayInfo = function (planetData) {
  const div = document.createElement('div')
  div.classList.add('planet-data-container')
  this.section.appendChild(div)
  const heading = document.createElement('h3');
  heading.textContent = planetData.name;
  div.appendChild(heading);
  for (let key in planetData) {
    if (key !== 'name' && key !== 'image') {
      let string = `${key.toUpperCase()}:           ${planetData[key]}`;
      this.makeParagraph(string, div);
    }
  }
  this.makeImage(planetData.image);
};

PlanetInfoView.prototype.clearInfo = function () {
  this.section.innerHTML = '';
};

PlanetInfoView.prototype.makeParagraph = function (info, element) {
  const para = document.createElement('p');
  para.textContent = info;
  element.appendChild(para);
};

PlanetInfoView.prototype.makeImage = function (source) {
  const image = document.createElement('img');
  image.src = source;
  this.section.appendChild(image);
};

module.exports = PlanetInfoView;
