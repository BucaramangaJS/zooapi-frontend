var Backbone = require('backbone');

var changePage = function (page) {
  $('.app__section').css('display', 'none');
  $('.' + page).css('display', 'block');
};

module.exports = Backbone.Router.extend({

  routes: {
    '': 'principal',
    'zoologicos': 'zoologicos',
    'animales': 'animales',
    'animales/crear': 'animales-crear',
    'transacciones': 'transacciones',
  },

  principal: function () {
    changePage('principal');
  },

  zoologicos: function () {
    changePage('zoos');
  },

  animales: function () {
    changePage('animals');
  },

  'animales-crear': function () {
    changePage('animals-create');
  },

  transacciones: function () {
    changePage('transactions');
  }

});
