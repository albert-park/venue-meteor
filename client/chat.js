// Template.chat.rendered = function(){
//    var panelBody = this.$('.panel-body');
//    panelBody.animate({ scrollTop: panelBody.prop("scrollHeight") - panelBody.height()}, 100);

//    this.find('ul')._uihooks = {
//      insertElement: function(node, next) {
//        $(node)
//          .hide()
//          .insertBefore(next)
//          .fadeIn(1000);
//        panelBody.animate({ scrollTop: panelBody.prop("scrollHeight") - panelBody.height()}, 300);
//      },
//      removeElement: function(node) {
//        $(node).fadeOut(function() {
//          this.remove();
//        });
//      }
//    };
//  }

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
     if (message == '') {
       // alert('Field cannot be empty')

       event.preventDefault();
     } else {


     Messages.insert({content: message, roomName: Session.get('currentRoom'), postedBy: Meteor.user().username || Meteor.user().profile.name, createdAt: new Date()});
     $('#messageBox').val('');

     return false;
     }
   },

   'keypress input': function(evt) {
      var message = $('#messageBox').val();
      var roomName = $('#roomBox').val();
      if(evt.charCode == 13) {

        if (message == '') {
       // alert('Field cannot be empty')

       event.preventDefault();
     } else {
        Messages.insert({content: message, roomName: Session.get('currentRoom'), postedBy: Meteor.user().username || Meteor.user().profile.name, createdAt: new Date()});
        $('#messageBox').val('');

      }
  
        return false;
      }
   }
 });