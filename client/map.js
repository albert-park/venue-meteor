Template.mapPostsList.created = function(){
  var generalAssembly = new google.maps.LatLng(34.024604, -118.482168);
  var generalAssembly2 = new google.maps.LatLng(34.012917, -118.495198);

  var misfit = new google.maps.LatLng(34.016225, -118.496553);
  var barkowski = new google.maps.LatLng(34.024960, -118.460058);
  var libraryAlehouse = new google.maps.LatLng(33.999639, -118.480583);
  var copaDoro = new google.maps.LatLng(34.014233, -118.495128);
  var speakEasy = new google.maps.LatLng(34.015706, -118.476727);
  var fourPlay = new google.maps.LatLng(34.038517, -118.437933);
  var barChloe = new google.maps.LatLng(34.014185, -118.495631);
  var dailyPint = new google.maps.LatLng(34.021143, -118.465919);
  var roomSantaMonica = new google.maps.LatLng(34.024236, -118.486217);


  var marker;
  var map;
  var MY_MAPTYPE_ID = 'custom_style';

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


     var contentString = '<h1>OH BOY</h1>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });


    var image = 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png';
    marker = new google.maps.Marker({
      map:map,
      draggable:false,
      // icon: image,
      animation: google.maps.Animation.DROP,
      position: generalAssembly,
      title: 'General Assembly'
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);

    marker2 = new google.maps.Marker({
      map:map,
      draggable:false,
      position: generalAssembly2,
      title: 'General Assembly'
    });
    google.maps.event.addListener(marker2, 'click', function() {
      infowindow.open(map,marker2);
    });

    marker3 = new google.maps.Marker({
      map:map,
      draggable:false,
      position: misfit
    });

    marker4 = new google.maps.Marker({
      map:map,
      draggable:false,
      position: barkowski
    });

    marker5 = new google.maps.Marker({
      map:map,
      draggable:false,
      position: libraryAlehouse
    });
  }

  function toggleBounce() {

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}