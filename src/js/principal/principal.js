var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

var state = require('../state');
var data = require('../data');
var PrincipalView = require('./views/Principal');


module.exports = function () {

  var principalView = new PrincipalView({
    el: $('#principal')
  });

  state.set('principalView', principalView);

};
