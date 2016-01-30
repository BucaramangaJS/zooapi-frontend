module.exports = Backbone.Model.extend({

  defaults: {
    id: null,  // String (UUID)
    active: null,  // Number (Integer)
    nombre: null,  // String
    ciudad: null,  // String
    direcion: null,  // String
    categoria: null  // String
  }

});
