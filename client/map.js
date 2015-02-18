Template.mapPostsList.created = function(){
  var generalAssembly = new google.maps.LatLng(34.024604, -118.482168);
  var generalAssembly2 = new google.maps.LatLng(34.012917, -118.495198);
  var marker;
  var map;
  var MY_MAPTYPE_ID = 'custom_style';

  function initialize() {

    var featureOpts = [
        {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "simplified"
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
                }
            ]
        },
        {
          "featureType": 'water',
          "stylers": [
            {
                    "color": "#34495e"
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
                    "color": "#ffffff"
                },
                {
                    "visibility": "off"
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

    var image = 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png';
    marker = new google.maps.Marker({
      map:map,
      draggable:false,
      // icon: image,
      animation: google.maps.Animation.DROP,
      position: generalAssembly
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);

    marker2 = new google.maps.Marker({
      map:map,
      draggable:false,
      position: generalAssembly2
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