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

  Template.chat.events({
    'keypress input': function(e) {
      if(e.keyCode != 13)
        return;

      sendMessage();
    },
    'click button': function () {
      sendMessage();
    }
  });

  Template.chat.helpers({
    log: function() {
      return Docs.find({type:"message"});
    }
  })

  Template.jsonInterpreter.events({
    'click button': function () {
      var json = $("#textarea-xml-input").val();
      var obj = jQuery.parseJSON(json);

      if($("#checkbox-include-time").prop("checked"))
        obj.createdAt = new Date().getTime();

      Docs.insert(obj);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

var sendMessage = function(){
  var text = document.getElementById("chat-box").value;
  var nick = document.getElementById("nickname-box").value;

  if(text.length == 0)
    return;

  var messageObject = {
    type:"message",
    text:text,
    nickname:nick,
    timestamp:(new Date()).getTime()
  }

  Docs.insert(messageObject);

  document.getElementById("chat-box").value = "";
}

Docs = new Meteor.Collection("docs");
