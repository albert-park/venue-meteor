Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.chat.helpers({
    messageList: function () {
      return Messages.find({roomName: 'myRoomster'});
    }
  });

  Template.chat.events({
    'click button': function () {
      var message = $('#messageBox').val();
      var roomName = $('#roomBox').val();

      Messages.insert({content: message, roomName: roomName, createdAt: new Date()});
      $('#messageBox').val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
