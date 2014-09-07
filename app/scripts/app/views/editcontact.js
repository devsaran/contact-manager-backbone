define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
], function($, _, Backbone, Templates) {

  var EditContactsView = Backbone.View.extend({
    template: Templates['contactEdit'],

    events: {
      'submit .contract-form': 'onFormSubmit'
    },

    render: function() {
      var html = this.template(_.extend(this.model.toJSON(), {
        isNew: this.model.isNew()
      }));
      this.$el.append(html);
      return this;
    },

    onFormSubmit: function(e) {
      e.preventDefault();
      this.model.set({
        name: this.$('.contact-name-input').val(),
        tel: this.$('.contact-tel-input').val(),
        email: this.$('.contact-email-input').val()
      });
    }
  });

  return EditContactsView;
});