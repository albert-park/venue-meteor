Messages = new Meteor.Collection('messages');
Rooms = new Meteor.Collection('rooms');

if (Meteor.isClient) {
  Session.setDefault('currentRoom', '');

  Template.chat.helpers({
    messageList: function () {
      return Messages.find({roomName: Session.get('currentRoom') });
    }
  });

  Template.chat.events({
    'click button': function () {
      var message = $('#messageBox').val();
      var roomName = $('#roomBox').val();

      Messages.insert({content: message, roomName: Session.get('currentRoom'), postedBy: Meteor.user(), createdAt: new Date()});
      $('#messageBox').val('');
    }
  });

  Template.rooms.helpers({
    roomList: function () {
      console.log(Rooms.find().fetch());
      return Rooms.find();
    }
  });

  Template.rooms.events({
    'click #createRoom': function () {
      var roomName = $('#roomBox').val();

      Rooms.insert({name: roomName, createdAt: new Date()});
      $('#roomBox').val('');
    },
    'change select': function(){
      var currentRoom = $('select').val();
      console.log(currentRoom);
      Session.set('currentRoom', currentRoom);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
