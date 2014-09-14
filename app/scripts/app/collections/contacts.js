define([
  'backbone',
  'app/models/contact', 
  'localstorage'
], function(Backbone, ContactModel) {

  var Contacts = Backbone.Collection.extend({
    model: ContactModel,
    localStorage: new Backbone.LocalStorage("Contacts"),

    search: function(letters) {
      var pattern = new RegExp(letters,"gi");
      return (this.filter(function(contact) {
          return pattern.test(contact.get("name"));
      }));
    }
  });

  return Contacts;
});