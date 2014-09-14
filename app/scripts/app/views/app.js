define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {


  var AppView = Backbone.View.extend({
    el: $('.main-container'),

    setViews : function(view) {
      this.$el.html(view.render().$el);
    }

  });

  return AppView;
});