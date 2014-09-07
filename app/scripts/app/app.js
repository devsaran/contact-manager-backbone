define([
  'backbone',
  'app/views/app',
  'app/router'
], function (Backbone, AppView, Router) {

  var initialize = function() {
    var appView = new AppView();
    var router = new Router(appView);
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});