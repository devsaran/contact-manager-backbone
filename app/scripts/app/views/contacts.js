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
      this.listenTo(this.collection, 'remove', this.render)
    },

    render: function() {
      this.$el.html(this.template);
      if(this.collection.length) {
        this.collection.each(this.renderOne, this);
      } else {
        this.$('.empty-contacts-placeholder').html('<div class="well text-center"><h3>There is no contacts</h3></div>');
      }

      return this;
    },

    renderOne: function(contact) {
      var contactView = new ContactView({model: contact});
      this.$('.contacts-container').append(contactView.render().$el);
    }
  });

  return ContactsView;
});