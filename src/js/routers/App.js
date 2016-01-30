var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

var principal = require('../principal/principal');
var animals = require('../animals/animals');
var animalsCreate = require('../animalsCreate/animalsCreate');


var changePage = function (page) {

  // Ocultar todas las vistas activas y mostrar una específica.
  $('.app__section').css('display', 'none');
  $('.' + page).css('display', 'block');

  console.log('Se ha cargado la ruta: "' + page + '".');
};

module.exports = Backbone.Router.extend({

  routes: {
    '': 'principal',
    'animales': 'animales',
    'animales/crear': 'animales-crear'
  },

  principal: function () {
    changePage('principal');
    principal();
  },

  animales: function () {
    changePage('animals');
    animals();
  },

  'animales-crear': function () {
    changePage('animals-create');
    animalsCreate();
  }

});
