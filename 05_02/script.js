var gMapAPIK = "AIzaSyAUcH_W8Tgs-lULk05ISp9IhtmKPg8SrtI";
var map;
      function initMap() {
        var storeLocation = {lat:34.1031252, lng: -118.3263873};
        
        map = new google.maps.Map(document.getElementById('hplus-map'), {
          'center' : storeLocation,
          'zoom' : 12,
          'mapTypeId' : google.maps.MapTypeId.ROADMAP,
          'draggable' : false,
          'scrollwheel' : false
        });
        var popupContent = 'H+ Sport<br>'
            popupContent += '1750 Vine Street<br>'
            popupContent += 'Los Angeles California'

        var infowindow = new google.maps.InfoWindow({
          content: popupContent
        });
        
        var marker = new google.maps.Marker({
          'position': storeLocation,
          'map': map,
          'title': 'hplus sport in Los Angeles (actually Capitol Records in real life)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }