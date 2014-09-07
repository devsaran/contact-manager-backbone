define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
], function($, _, Backbone, Templates) {

  var EditContactView = Backbone.View.extend({
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

      this.trigger('form:submitted', {
        name: this.$('.contact-name-input').val(),
        phone: this.$('.contact-phone-input').val(),
        email: this.$('.contact-email-input').val()
      });
    }
  });

  return EditContactView;
});