var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

var state = require('../state');
var data = require('../data');
var AnimalsView = require('./views/Animals');


module.exports = function () {

  var animalsView = new AnimalsView({
    el: $('#animals')
  });

  state.set('animalsView', animalsView);

};
