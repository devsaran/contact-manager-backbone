define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'contacts/new': 'newContact',
      'contacts/edit/:id': 'editContact'
    },

    initialize: function(view) {
      this.appView = view;
    },

    home: function() {
      this.appView.setPage('home');
    },

    newContact: function() {
      this.appView.setPage('contactform', {});
    },

    editContact: function(id) {
      this.appView.setPage('contactform', {contact: id});
    }

  });

  return Router;
});