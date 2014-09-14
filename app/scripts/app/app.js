define([
  'backbone',
  'app/views/app',
  'app/router',
  'app/collections/contacts'
], function (Backbone, AppView, Router, ContactsCollection) {

  var initialize = function() {
    var contactsCollections = new ContactsCollection();
    var appView = new AppView();
    App.router = new Router({view: appView, collection: contactsCollections});
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});