define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
], function($, _, Backbone, Templates) {

  var ContactView = Backbone.View.extend({
    tagName: 'li',
    className: 'media col-md-6 col-lg-4',
    template: Templates['contact'],

    events: {
      'click .delete-contact': 'onClickContactDelete'
    },

    initialize: function() {
      this.listenTo(this.model, 'remove', this.remove)
    },

    render: function() {
      var html = this.template(this.model.toJSON());
      this.$el.append(html);
      return this;
    },

    onClickContactDelete: function(e) {
      e.preventDefault();
      this.model.destroy();
    }
  });

  return ContactView;
});
