var _ = require('underscore');
var Backbone = require('backbone');

var src = require('../templates/main.html');


module.exports = Backbone.View.extend({

  template: _.template(src),

  events: {},

  initialize: function () {

    this.render();
  },

  render: function () {

    var html = this.template();
    this.$el.html(html);
  }

});
