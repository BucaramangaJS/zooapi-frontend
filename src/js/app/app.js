var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

var state = require('../state');
var data = require('../data');
var AppView = require('./views/App');


module.exports = function () {

  var appView = new AppView({
    el: $('#app')
  });

  state.set('appView', appView);

};
