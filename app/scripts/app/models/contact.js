define([
  'backbone'
], function(Backbone) {

  var Contact = Backbone.Model.extend({
    defaults: {
      name: null,
      phone: null,
      email: null
    },
    
    validate: function (attrs) {
      var errors = [];
      if (!$.trim(attrs.name)) {
        errors.push({name: 'name', message: 'Please enter the name field.'});
      }
      if (!$.trim(attrs.phone)) {
        errors.push({name: 'phone', message: 'Please enter the phone field.'});
      }
      if (!$.trim(attrs.email) || !this.validateEmail(attrs.email)) {
        errors.push({name: 'email', message: 'Please enter the valid email field.'});
      }
      return errors.length > 0 ? errors : false;
    },

    validateEmail: function(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 
  });

  return Contact;
});