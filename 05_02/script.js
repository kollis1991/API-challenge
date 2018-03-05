var gMapAPIK = "AIzaSyAUcH_W8Tgs-lULk05ISp9IhtmKPg8SrtI";
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('hplus-map'), {
          'center': {lat:34.1031252, lng: -118.3263873},
          'zoom': 12,
          'mapTypeID': google.maps.MapTypeId.ROADMAP,
          'draggable': false,
          'scrollwheel': false
        });
      }