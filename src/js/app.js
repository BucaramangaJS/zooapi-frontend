var _ = require('underscore');
var Backbone = require('backbone');

var configure = require('./configure');
var settings = require('./settings');
var data = require('./data');
var state = require('./state');
var AppView = require('./views/App');
var AppRouter = require('./routers/App');


//
// VISTA PRINCIPAL
//
var appView = new AppView({
  el: $('#app')
});
state.set('appView', appView);


//
// ROUTER
//
var appRouter = new AppRouter();
Backbone.history.start();
state.set('appRouter', appRouter);
