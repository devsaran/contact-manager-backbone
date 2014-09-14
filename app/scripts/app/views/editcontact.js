define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
], function($, _, Backbone, Templates) {

  var EditContactView = Backbone.View.extend({
    template: Templates['contactEdit'],

    initialize: function() {
      this.listenTo(this.model, 'invalid', function(model, error, options) {
        this.cleanFormErrors();
        _.each(error, this.showFormErrors, this);
      });
    },

    events: {
      'submit .contact-form': 'onFormSubmit'
    },

    render: function() {
      this.$el.empty();
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
    },

    showFormErrors: function(error) {
      this.$('.form-group-' + error.name).addClass('has-error').find('.help-block').html(error.message);
    },

    cleanFormErrors: function() {
      this.$('.form-group').removeClass('has-error');
      this.$('.help-block').html('');
    }
  });

  return EditContactView;
});