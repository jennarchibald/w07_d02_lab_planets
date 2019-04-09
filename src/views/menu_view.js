const PubSub = require('../helpers/pub_sub.js');

const MenuView = function (menu) {
  this.menu = menu;
};

MenuView.prototype.bindEvents = function () {
  this.menu.addEventListener('click', (event)=>{
    console.log(event.target.id);
    PubSub.publish('MenuView:clicked-planet', event.target.id);
    this.removeClassActive();
    this.addActiveClassToNav(event.target);
  });
};

MenuView.prototype.addActiveClassToNav = function (planetClicked) {
  planetClicked.classList.add('activetab');
};

MenuView.prototype.removeClassActive = function () {
  const menuElements = this.menu.children;
  for (element of menuElements){
    element.classList.remove('activetab');
  }
};

module.exports = MenuView ;
