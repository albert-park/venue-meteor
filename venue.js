Messages = new Meteor.Collection('messages');
Rooms = new Meteor.Collection('rooms');

if (Meteor.isClient) {
  Session.setDefault('currentRoom', '');

  Template.chat.rendered = function(){
    var panelBody = this.$('.panel-body');
    panelBody.animate({ scrollTop: panelBody.prop("scrollHeight") - panelBody.height()}, 100);

    this.find('ul')._uihooks = {
      insertElement: function(node, next) {
        $(node)
          .hide()
          .insertBefore(next)
          .fadeIn(1000);
        panelBody.animate({ scrollTop: panelBody.prop("scrollHeight") - panelBody.height()}, 300);
      },
      removeElement: function(node) {
        $(node).fadeOut(function() {
          this.remove();
        });
      }
    };
  }

  Template.chat.helpers({
    messageList: function () {
      return Messages.find({roomName: Session.get('currentRoom') });
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
