module.exports = Backbone.Model.extend({

  defaults: {
    id: null,  // String (UUID)
    active: null,  // Number (Integer)
    nombre: null,  // String
    foto: null,  // String (URL)
    especie: null,  // String
    precio: null,  // Number
    en_venta: null,  // Boolean
    zoo: null  // String (UUID)
  }

});
