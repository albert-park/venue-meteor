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
