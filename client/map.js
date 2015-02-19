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





Template.mapPostsList.events({
   'click .map-marker': function(evt, templ){
      evt.preventDefault();
      console.log(evt.target.text);
      var currentRoom = evt.target.text;
      // console.log(currentRoom);
      Session.set('currentRoom', currentRoom);
   }
});