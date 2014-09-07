define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
  'app/views/contact'
], function($, _, Backbone, Templates, ContactView) {

  var ContactsView = Backbone.View.extend({
    template: Templates['contacts'],

    render: function() {
      this.$el.html(this.template);

      this.collection.each(this.renderOne, this);

      return this;
    },

    renderOne: function(contact) {
      var contactView = new ContactView({model: contact});
      this.$('.contacts-container').append(contactView.render().$el);
    }
  });

  return ContactsView;
});