define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
  'app/views/contact'
], function($, _, Backbone, Templates, ContactView) {

  var ContactsView = Backbone.View.extend({
    template: Templates['contacts'],

    initialize: function() {
      this.listenTo(this.collection, 'remove', this.render);
      this.$el.html(this.template);

      this.contactsContainer = this.$('.contacts-container');
      this.emptyContactsPlaceholder = this.$('.empty-contacts-placeholder');
      this.emptySearchPlaceholder = this.$('.empty-search-contacts-placeholder');
    },

    events: {
      'keyup .contact-name-search': 'searchContacts'
    },

    searchContacts: function(e) {
      var searchTerm = $.trim(this.$('.contact-name-search').val());
      if(searchTerm) {
        var filterd = this.collection.search(searchTerm);
        if(filterd.length) {
          this.contactsContainer.empty();
          this.emptySearchPlaceholder.empty();
          _.each(filterd, this.renderOne, this);
        } else {
          this.contactsContainer.empty();
          this.emptySearchPlaceholder.html('<div class="well text-center"><h3>There is no contacts starting with <strong>' + searchTerm + '.</strong></h3></div>');
        }
      } else {
        this.render();
      }
    },

    render: function() {
      this.contactsContainer.empty();
      if(this.collection.length) {
        this.collection.each(this.renderOne, this);
      } else {
        this.emptyContactsPlaceholder.html('<div class="well text-center"><h3>There is no contacts.</h3> <a href="#contacts/new" class="btn btn-lg btn-outline">Add Contact</a></div>');
      }

      return this;
    },

    renderOne: function(contact) {
      var contactView = new ContactView({model: contact});
      this.contactsContainer.append(contactView.render().$el);
    }
  });

  return ContactsView;
});