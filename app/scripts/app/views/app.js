define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/contact',
  'app/views/contacts',
  'app/views/editcontact',
  'app/collections/contacts'
], function($, _, Backbone, ContactModel, ContactsView, EditContactView, ContactsCollection) {

  var initialContacts = [{
        id: 1,
        name : 'Pradeep Saran',
        phone: '91-7829527438',
        email: 'saran@devsaran.com'
      }];

  var contactsCollections = new ContactsCollection(initialContacts);

  var AppView = Backbone.View.extend({
    el: $('.main-container'),
    setPage: function(page, options) {
      if(page === 'home') {
        var contactsView = new ContactsView({
          collection: contactsCollections
        });
        this.$el.html(contactsView.render().$el);
      } else if(page === 'contactform') {
        if(options.contact) {
          var editContactsView = new EditContactView({
            model: contactsCollections.get(options.contact)
          });
          this.$el.html(editContactsView.render().$el);
        } else {
          var editContactsView = new EditContactView({
            model: new ContactModel()
          });
          this.$el.html(editContactsView.render().$el);
        }
      }
    }
  });

  return AppView;
});