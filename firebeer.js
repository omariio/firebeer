if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.feed.helpers({
    docs: function () {
      return Docs.find();
    },
    string: function () {
      return JSON.stringify(this);
    }
  });

  Template.jsonInterpreter.events({
    'click button': function () {
      var json = $("#textarea-xml-input").val();
      var obj = jQuery.parseJSON(json);

      if($("#checkbox-include-time").prop("checked"))
        obj.createdAt = new Date();

      Docs.insert(obj);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Docs = new Meteor.Collection("docs");
