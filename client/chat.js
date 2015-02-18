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
