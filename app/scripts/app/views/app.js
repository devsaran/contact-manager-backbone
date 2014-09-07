define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/contact',
  'app/views/contacts',
  'app/views/editcontact'
], function($, _, Backbone, ContactModel, ContactsView, EditContactView) {


  var AppView = Backbone.View.extend({
    el: $('.main-container'),

    setPage: function(page, options) {
      if(page === 'home') {
        this.collection.fetch();
        var contactsView = new ContactsView({
          collection: this.collection
        });
        this.$el.html(contactsView.render().$el);
      } else if(page === 'contactform') {
        if(options.contact) {
          var contact = this.collection.get(options.contact);
          var editContactsView = new EditContactView({
            model: contact
          });
          this.$el.html(editContactsView.render().$el);

          editContactsView.on('form:submitted', function(attrs) {
            contact.set(attrs);
            contact.save();
            App.router.navigate('', true);
          });

        } else {
          var createContactsView = new EditContactView({
            model: new ContactModel()
          });
          this.$el.html(createContactsView.render().$el);

          createContactsView.on('form:submitted', function(attrs) {
            attrs.id = this.collection.isEmpty() ? 1 : (_.max(this.collection.pluck('id')) + 1);
            var newContact = new ContactModel(attrs);
            this.collection.add(newContact);
            newContact.save();
            App.router.navigate('', true);
          }, this);
        }
      }
    }
  });

  return AppView;
});