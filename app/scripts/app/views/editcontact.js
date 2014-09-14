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
      'submit .contact-form': 'onFormSubmit',
      'click .btn-close-form': 'onFormClose'
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
      var attrs = {
        name: this.$('.contact-name-input').val(),
        phone: this.$('.contact-phone-input').val(),
        email: this.$('.contact-email-input').val()
      };

      if(this.model.isNew()) {
        var error = this.model.validate(attrs);
        if(error) {
          this.cleanFormErrors();
          _.each(error, this.showFormErrors, this);
          return;
        }
      }

      this.trigger('form:submitted', attrs);
    },

    showFormErrors: function(error) {
      this.$('.form-group-' + error.name).addClass('has-error').find('.help-block').html(error.message);
    },

    cleanFormErrors: function() {
      this.$('.form-group').removeClass('has-error');
      this.$('.help-block').html('');
    },

    onFormClose: function(e) {
      e.preventDefault();
      this.trigger('form:close');
    }
  });

  return EditContactView;
});