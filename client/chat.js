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

     return false;
   }
 });