define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/contact',
  'app/views/contacts',
  'app/views/editcontact'
], function($, _, Backbone, ContactModel, ContactsView, EditContactView) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'contacts/new': 'newContact',
      'contacts/edit/:id': 'editContact'
    },

    initialize: function(options) {
      this.appView = options.view;
      this.collection = options.collection;
    },

    home: function() {
      this.collection.fetch();
      var contactsView = new ContactsView({
        collection: this.collection
      });
      this.appView.setViews(contactsView);
    },

    newContact: function() {
      var createContactsView = new EditContactView({
        model: new ContactModel()
      });
      this.appView.setViews(createContactsView);

      createContactsView.on('form:submitted', function(attrs) {
        attrs.id = this.collection.isEmpty() ? 1 : (_.max(this.collection.pluck('id')) + 1);
        var newContact = new ContactModel();
        var modelError = newContact.save(attrs, {validate:true});
        if(modelError !== false) {
          this.collection.add(newContact);
          App.router.navigate('', true);
        }
      }, this);
    },

    editContact: function(id) {
      var contact = this.collection.get(id);
      var editContactsView = new EditContactView({
        model: contact
      });
      this.appView.setViews(editContactsView);

      editContactsView.on('form:submitted', function(attrs) {
        var modelError = contact.save(attrs, {validate:true});
        if(modelError !== false) {
          App.router.navigate('', true);
        }
      });
    }

  });

  return Router;
});