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
    ['Cameo Bar', 34.008394, -118.490418],
    ['The Commons Ale House', 34.013684, -118.495804],
    ['The Misfit Restaurant & Bar', 34.016225, -118.496553],
    ['Barkowski', 34.024960, -118.460058],
    ['Library AleHouse', 33.999639, -118.480583],
    ["Copa d' Oro", 34.014233, -118.495128],
    ['Speak Easy Cocktail', 34.015706, -118.476727],
    ['4Play Gentlemens Club', 34.038517, -118.437933],
    ['Bar Chloe', 34.014185, -118.495631],
    ['The Daily Pint', 34.021143, -118.465919],
    ['The Room Santa Monica', 34.024236, -118.486217],
    ['The Bungalow', 34.017801, -118.501575],
    ['The Craftsman Bar and Kitchen', 34.013730, -118.495766],
    ['Basement Tavern', 34.001794, -118.483338],
    ['Brilliantshine', 34.020407, -118.496656],
    ['Harvelle’s Blues Club', 34.015760, -118.494583],
    ['O’Briens Irish Pub', 34.033407, -118.480665],
    ['41 Ocean Club', 34.012151, -118.495113],
    ['The Chestnut Club', 34.024533, -118.486115],
    ['Zanzibar', 34.018800, -118.495476],
    ['Bodega Wine Bar', 34.018326, -118.489203],
    ['Brick+Mortar', 34.003865, -118.484762],
    ['Father’s Office', 34.031758, -118.496358],
    ['Blue Daisy', 34.017181, -118.491596],
    ['SHOREbar', 34.028610, -118.518921]
    ];

    Rooms.remove({});

    for (var i = 0; i < markers.length; i++){
    	Rooms.insert({name: markers[i][0], location: {lat: markers[i][1], long: markers[i][2]}})
    }
  });
}
