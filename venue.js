Messages = new Meteor.Collection('messages');
Rooms = new Meteor.Collection('rooms');

Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('landing');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});

Router.route('/', function(){
	this.render('applicationLayout');
})

if (Meteor.isClient) {
  Session.setDefault('currentRoom', 'Home Room');
  //Accounts.onLogin(Template.mapPostsList.created);
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var markers = [
    ['General Assembly', 34.024604, -118.482168],
    ['General Assembly 2', 34.012917, -118.495198],
    ['The Misfit Restaurant & Bar', 34.016225, -118.496553],
    ['Barkowski', 34.024960, -118.460058],
    ['Libary AleHouse', 33.999639, -118.480583],
    ["Copa d' Oro", 34.014233, -118.495128],
    ['Speak Easy Cocktail', 34.015706, -118.476727],
    ['4Play Gentlemens Club', 34.038517, -118.437933],
    ['Bar Chloe', 34.014185, -118.495631],
    ['The Daily Pint', 34.021143, -118.465919],
    ['The Room Santa Monica', 34.024236, -118.486217]
    ];

    Rooms.remove({});

    for (var i = 0; i < markers.length; i++){
    	Rooms.insert({name: markers[i][0], location: {lat: markers[i][1], long: markers[i][2]}})
    }
  });
}
