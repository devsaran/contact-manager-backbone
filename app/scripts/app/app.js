define([
  'backbone',
  'app/views/app',
  'app/router',
  'app/collections/contacts'
], function (Backbone, AppView, Router, ContactsCollection) {

  var initialize = function() {
    var contactsCollections = new ContactsCollection();
    var appView = new AppView({
      collection: contactsCollections
    });
    App.router = new Router(appView);
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});