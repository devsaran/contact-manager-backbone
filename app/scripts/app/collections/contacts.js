define([
  'backbone',
  'app/models/contact', 
  'localstorage'
], function(Backbone, ContactModel) {

  var Contacts = Backbone.Collection.extend({
    model: ContactModel,
    localStorage: new Backbone.LocalStorage("Contacts")
  });

  return Contacts;
});