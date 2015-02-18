Messages = new Meteor.Collection('messages');
Rooms = new Meteor.Collection('rooms');

if (Meteor.isClient) {
  Session.setDefault('currentRoom', '');

  Template.chat.helpers({
    messageList: function () {
      return Messages.find({roomName: Session.get('currentRoom') });
    },

    roomName: function(){ return Session.get('currentRoom')},

    messageCount: function(){
      var panelBody = $('.panel-body');
      panelBody.velocity("scroll", {duration: 1500, container: panelBody, offset: panelBody.prop("scrollHeight")})
      $("li").last().velocity("fadeIn", {duration: 1500});
      $(".label-danger").velocity({rotateX: 180, duration: 100})
        .velocity("reverse");
      return Messages.find({roomName: Session.get('currentRoom')}).count();
    }
  });

  Template.chat.events({
    'click button': function () {
      var message = $('#messageBox').val();
      var roomName = $('#roomBox').val();

      Messages.insert({content: message, roomName: Session.get('currentRoom'), postedBy: Meteor.user().username || Meteor.user().profile.name, createdAt: new Date()});
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

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
