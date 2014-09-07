define([
  'handlebars'
], function(Handlebars) {

  var Templates = {};

  Templates['contacts'] =  [
    '<div class="row well">',
      '<div class="text-center col-sm-6">',
        '<a href="#contacts/new" class="btn btn-lg btn-outline">Add Contact</a>',
      '</div>',
      '<div class="text-center col-sm-6">',
        '<input type="text" class="form-control contact-name-search" placeholder="Search">',
      '</div>',
    '</div>',
    '<ul class="media-list row contacts-container"></ul>',
    '<div class="empty-contacts-placeholder"></div>'
  ].join('');

  Templates['contact'] =  [
    '<div class="media-heading">',
      '<h3>',
        '{{name}}',
      '</h3>',
    '</div>',
    '<div class="media-body">',
      '<dl>',
        '<dt>Phone Number:</dt><dd>{{phone}}</dd>',
        '<dt>Email:</dt><dd>{{email}}</dd>',
      '</dl>',
    '</div>',
    '<div>',
      '<a href="#contacts/edit/{{id}}" class="btn btn-outline"><span class="glyphicon glyphicon-pencil"></span> Edit</a>',
      '<a href="#contacts/delete/{{id}}" class="delete-contact btn btn-outline">',
        '<span class="glyphicon glyphicon-trash"></span> Delete',
      '</a>',
    '</div>',
    '<hr>',
  ].join('');

  Templates['contactEdit'] =  [
    '<h2 class="page-header text-center">{{#if isNew}} Create {{else}} Edit {{/if}} Contact</h2>',
      '<form role="form" class="form-horizontal contract-form">',
        '<div class="form-group">',
          '<label class="col-sm-4 control-label">Full name:</label>',
          '<div class="col-sm-6">',
            '<input type="text" class="form-control contact-name-input" value="{{name}}">',
          '</div>',
        '</div>',
        '<div class="form-group">',
          '<label class="col-sm-4 control-label">Email address:</label>',
          '<div class="col-sm-6">',
            '<input type="email" class="form-control contact-email-input" value="{{email}}">',
          '</div>',
        '</div>',
        '<div class="form-group">',
          '<label class="col-sm-4 control-label">Telephone number:</label>',
          '<div class="col-sm-6">',
            '<input type="tel" class="form-control contact-phone-input" value="{{phone}}">',
          '</div>',
        '</div>',
        '<div class="form-group">',
          '<div class="col-sm-offset-4 col-sm-3">',
            '<button type="submit" class="btn btn-outline btn-lg btn-block">Submit</button>',
          '</div>',
          '<div class="col-sm-3">',
            '<a href="#" class="btn btn-outline btn-lg btn-block">Cancel</a>',
          '</div>',
        '</div>',
      '</form>',
  ].join('');

  for (var tmpl in Templates) {
    if(Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl] = Handlebars.compile(Templates[tmpl]);
    }
  }

  return Templates;
});