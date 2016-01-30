var _ = require('underscore');
var Backbone = require('backbone');

var src = require('../../templates/app/app.html');
var PrincipalView = require('./Principal');


module.exports = Backbone.View.extend({

  template: _.template(src),

  events: {},

  initialize: function () {

    this.principalView = null;

    this.render();
  },

  render: function () {

    var html = this.template();
    this.$el.html(html);

    var $principalEl = this.$('.principal');
    this.principalView = new PrincipalView({
      el: $principalEl
    });
  }

});
