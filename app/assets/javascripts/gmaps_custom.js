var mapStyle = [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}];

function gmap_show(observation) {
  if ((observation.lat == null) || (observation.lng == null) ) {    // validation check if coordinates are there
    return 0;
  }

  handler = Gmaps.build('Google');    // map init
  handler.buildMap({ provider: { zoom: 5}, internal: {id: 'map'}}, function(){
    markers = handler.addMarkers([    // put marker method
      {
        "lat": observation.lat,    // coordinates from parameter observation
        "lng": observation.lng,
        "picture": {    // setup marker icon
          "width":  32,
          "height": 32
        },
        "infowindow": "<b>" + observation.name + "</b> " + observation.address + ", " + observation.postal_code + " " + observation.city
      }
    ]);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
    handler.getMap().setZoom(5);    // set the default zoom of the map
  });
}

function gmap_form(observation) {
  handler = Gmaps.build('Google');    // map init
  handler.buildMap({ provider: {zoom: 5}, internal: {id: 'map'}}, function(){
    if (observation && observation.lat && observation.lng) {    // statement check - new or edit view
      markers = handler.addMarkers([    // print existent marker
        {
          "lat": observation.lat,
          "lng": observation.lng,
          "picture": {
            "width":  32,
            "height": 32
          },
          "infowindow": "Coordinates of measurements. <br> Latitude:" + observation.lat + " <br>Longitude: " + observation.lng
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(5);
    }
    else {    // show the empty map
      handler.fitMapToBounds();
      handler.map.centerOn([52.10, 19.30]);
      handler.getMap().setZoom(1);
    }
  });

  var markerOnMap;

  function placeMarker(location) {    // simply method for put new marker on map
    if (markerOnMap) {
      markerOnMap.setPosition(location);
    }
    else {
      markerOnMap = new google.maps.Marker({
        position: location,
        map: handler.getMap()
      });
    }
  }

  google.maps.event.addListener(handler.getMap(), 'click', function(event) {    // event for click-put marker on map and pass coordinates to hidden fields in form
    placeMarker(event.latLng);
    document.getElementById("map_lat").value = event.latLng.lat();
    document.getElementById("map_lng").value = event.latLng.lng();
  });
}