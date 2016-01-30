var _ = require('underscore');
var Backbone = require('backbone');

var configure = require('./configure');
var state = require('./state');
var AppRouter = require('./routers/App');
var app = require('./app/app');


// Iniciar la aplicación principal.
app();

// Crear router.
var appRouter = new AppRouter();

// Guardar referencia del router.
state.set('router', appRouter);

// Iniciar la ruta actual y leer futuros cambios.
Backbone.history.start();
