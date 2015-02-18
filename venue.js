Messages = new Meteor.Collection('messages');
Rooms = new Meteor.Collection('rooms');

if (Meteor.isClient) {
  Session.setDefault('currentRoom', '');
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
