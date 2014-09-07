define([
  'backbone'
], function(Backbone) {

  var Contact = Backbone.Model.extend({
    defaults: {
      name: null,
      phone: null,
      email: null
    },
  });

  return Contact;
});