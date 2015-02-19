Template.mapPostsList.created = function(){
  var generalAssembly = new google.maps.LatLng(34.024604, -118.482168);
  var marker;
  var map;
  var MY_MAPTYPE_ID = 'custom_style';
  var infowindow = null;

  function initialize() {

    var featureOpts = [
        {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                  "weight": "0.1"
                },
                {
                  "opacity": "0.1"
                }
            ]
        },
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                  "color": "#444444"
                },
                {
                  "opacity": "0.1"
                }
            ]
        },
        {
          "featureType": 'water',
          "stylers": [
            {
                    "color": "#2c3e50"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#34495e"
                },
                {
                    "weight": "0.1"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "color": "#ecf0f1"
                },
                {
                    "visibility": "on"
                }
            ]
        },
    ];


    


    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var image = {
        url: '/current_location.png',
        origin: null,
        anchor: null
      };

      // var infowindow = new google.maps.InfoWindow({
      //   map: map,
      //   position: pos,
      //   icon: image,
      //   content: 'Location found using HTML5.'
      // });

      var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: image,
          animation: google.maps.Animation.BOUNCE
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }







    var mapOptions = {
      zoom: 14,
      center: generalAssembly,
       scrollwheel: false,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

    var styledMapOptions = {
      name: 'Custom Style'
    };


    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

      var contentString = null;

      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });


    var image = 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png';

    // Bars in the LA area
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
    ['SHOREbar', 34.028610, -118.518921],
    ['R+D Kitchen', 34.032248, -118.495685],
    ['TRiP', 34.011396, -118.480933],
    ['The Galley', 34.003560, -118.485175],
    ['Barcopa', 34.000086, -118.481671],
    ['The Gaslite', 34.032106, -118.482178],
    ['Suite 700', 34.015461, -118.498823],
    ['Rustic Canyon', 34.025046, -118.491121],
    ['Upper West', 34.027195, -118.454954],
    ['Coast', 34.007242, -118.491711],
    ['Hollywood Smoke', 33.997609, -118.479513],
    ['Ye Olde Kings Head', 34.014465, -118.497198],
    ['House of Billiards', 34.029875, -118.482832],
    ['The Penthouse', 34.018928, -118.501077],
    ['The Wellesbourne', 34.039432, -118.430379],
    ['Thirsty Crow', 34.083702, -118.273714],
    ['Tiki-Ti Cocktail Lounge', 34.097470, -118.285731],
    ['The Know Where Bar', 34.101689, -118.312736],
    ['Blue Collar', 34.070340, -118.361646],
    ['R Bar', 34.057836, -118.301103],
    ['Catcher In the Rye', 34.151864, -118.360585],
    ['Black Rose Tavern', 34.054862, -118.383238],
    ['Library Bar', 34.048696, -118.256110],
    ['Melody Lounge', 34.065585, -118.238302],
    ['Piano Bar', 34.099898, -118.330589],
    ['Melrose Umbrella Co', 34.083753, -118.352624],
    ['Sassafras', 34.093497, -118.326989],
    ['The Well', 34.098295, -118.325927],
    ['Sunset Beer Company', 34.075469, -118.255312],
    ['Pour Vous', 34.083245, -118.322309],
    ['1642 Beer and Wine', 34.068215, -118.262323],
    ['The Powder Room', 34.099366, -118.329321],
    ['Villains Tavern', 34.040171, -118.230960],
    ['Seven Grand', 34.047018, -118.255874],
    ['4100 Bar', 34.092971, -118.281443],
    ['General Lee’s', 34.065005, -118.236886],
    ['The Griffin', 34.125188, -118.264768],
    ['The Varnish', 34.044772, -118.249539],
    ['The Roger Room', 34.077875, -118.376363],
    ['LINK', 34.073112, -118.375966],
    ['Gold Room', 34.076390, -118.257157],
    ['Jay’s Bar', 34.095521, -118.283015],
    ['Little Bar', 34.060701, -118.344907],
    ['Frank N Hanks', 34.064763, -118.308877],
    ['Thirteen XIII Soju Bar', 34.054382, -118.322187],
    ['Au Lac DTLA', 34.056142, -118.250785],
    ['Atwater Village Tavern', 34.117821, -118.260448],
    ['Wolf & Crane Bar', 34.047918, -118.239731],
    ['The Morrison', 34.123781, -118.268725],
    ['5 Line Tavern', 34.138803, -118.213320],
    ['3Twenty Wine Lounge', 34.068252, -118.343779],
    ['EightyTwo', 34.045415, -118.237670],
    ['Verdugo', 34.113680, -118.234966],
    ['The Black Sheep', 34.044780, -118.249466],
    ['Blue Goose Lounge', 34.098365, -118.303430],
    ['The Stocking Frame', 34.042816, -118.257744],
    ['Redbird', 34.050456, -118.244031],
    ['Blipsy Bar', 34.077869, -118.309288],
    ['The Virgil', 34.091022, -118.287079],
    ['Living Room', 34.101243, -118.325828],
    ['The Edison', 34.051130, -118.244957],
    ['Now Boarding', 34.090611, -118.358193],
    ['Blue Whale Bar', 34.049749, -118.242145],
    ['Red Lion Tavern', 34.099225, -118.258996],
    ['Mom’s Bar', 34.039570, -118.464945],
    ['Frolic Room', 34.101801, -118.325837],
    ['Good Times at Davey Wayne’s', 34.100217, -118.323955],
    ['Crane’s Bar Downtown', 34.042713, -118.253559],
    ['Covell', 34.099923, -118.290144],
    ['Harvard & Stone', 34.101904, -118.304372],
    ['Bigfoot West', 34.015567, -118.413177],
    ['Footsie’s', 34.084547, -118.221116],
    ['Mud Hen Tavern', 34.084682, -118.338352],
    ['The Mint', 34.052214, -118.371568],
    ['The Wilde Thistle', 34.026949, -118.408969],
    ['The Commission', 34.099465, -118.329624],
    ['El Prado', 34.077908, -118.259526],
    ['Bacaro LA', 34.034496, -118.283512],
    ['Karma Lounge', 34.075998, -118.295159],
    ['Tower Bar', 34.095111, -118.372082],
    ['The Roof on Wilshire', 34.063793, -118.366000],
    ['Louie’s of Mar Vista', 34.004144, -118.430945],
    ['Novel Bar', 34.061424, -118.308497],
    ['Westside Tavern', 34.039728, -118.428875],
    ['Mrs Fish', 34.048886, -118.251378],
    ['The Woodman', 34.148076, -118.430127],
    ['Far Bar', 34.049628, -118.239559],
    ['Blue Palms Brewhouse', 34.101489, -118.323150],
    ['Liquid Kitty', 34.030625, -118.447100],
    ['Melody Bar & Grill', 33.953697, -118.395852],
    ['The Rooftop Bar, Downtown LA', 34.050167, -118.257093],
    ['Bobby London', 34.076134, -118.308813],
    ['The Black Boar', 34.139180, -118.202013],
    ['Boulevard3', 34.098515, -118.331774],
    ['The OffBeat Bar', 34.114274, -118.182215],
    ['The Brickyard Pub', 34.103472, -118.332183],
    ['The Mandrake Bar', 34.033812, -118.376156],
    ['Room 5', 34.074819, -118.344301],
    ['The Greyhound Bar & Grill', 34.108725, -118.193897]
    ]; 

    infowindow = new google.maps.InfoWindow({
      content: null
    });

    for(var i = 0; i < markers.length; i++){
      var positionMarker = new google.maps.LatLng(markers[i][1], markers[i][2]);
      
      var positionTitle = '<a class="map-marker" href="#">' + markers[i][0] + '</a>';

      // marker object
      marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: positionMarker,
        title: positionTitle
      });

      // add title to the marker once clicked
      google.maps.event.addListener(marker, 'click', (function(marker){
        return function(){
          infowindow.setContent(marker.title);
          // infowindow.setContent(contentString);
          infowindow.open(map, marker);
        }
      })(marker));

    }
  }
  google.maps.event.addDomListener(window, 'load', initialize);


  function toggleBounce() {

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}

Template.mapPostsList.destroyed = function(){console.log("map was destroyed")}

// Link to enter room based on map marker
Template.mapPostsList.events({
   'click .map-marker': function(evt, templ){
      evt.preventDefault();
      console.log(evt.target.text);
      var currentRoom = evt.target.text;
      // console.log(currentRoom);
      Session.set('currentRoom', currentRoom);

      $('html, body').animate({ scrollTop: 0 }, 'slow');
   }
});