var _ = require('underscore');
var Backbone = require('backbone');

_.templateSettings = {
    evaluate    : /{{([\s\S]+?)}}/g,
    interpolate : /{{=([\s\S]+?)}}/g,
    escape      : /{{-([\s\S]+?)}}/g
};

window._ = _;
window.Backbone = Backbone;
