module.exports = Backbone.Model.extend({

  defaults: {
    id: null,  // String (UUID)
    active: null,  // Number (Integer)
    valor: null,  // Number
    vendedor: null,  // String (UUID)
    comprador: null,  // String (UUID)
    animal: null,  // String (UUID)
    fecha: null  // Date
  }

});
