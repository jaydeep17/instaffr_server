function initialize() {
    var mapOptions = {
        zoom: 17,
        center: {
            lat: -33.8666,
            lng: 151.1958
        }
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


    // get current location and set it on the map
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log('lat', lat);
        console.log('lng', lng);
        map.setCenter(new google.maps.LatLng(lat, lng));
    });
}

google.maps.event.addDomListener(window, 'load', initialize);