var map;
function initMap() {
	var storeLocation = {lat: 34.1031131, lng: -118.326343},
		storeLocation2 = {lat: 34.073873, lng: -118.24077740000001},
		centerPoint = {lat: 34.0937772394951, lng: -118.27888622568359};

	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : centerPoint,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});
	
	var popupContent = 'H+ Sport Hollywood<br>';
	    popupContent += '1750 Vine St<br>';
	    popupContent+= 'Los Angeles, CA';
	
	var popupContent2 = 'H+ Sport Chavez Ravine<br>';
	    popupContent2 += '1000 Vin Scully Ave<br>';
	    popupContent2 += 'Los Angeles, CA';
	
	var infowindow = new google.maps.InfoWindow({
			content: popupContent
		}),
		infowindow2 = new google.maps.InfoWindow({
			content: popupContent2
		});
	
	var marker= new google.maps.Marker({
			'position': storeLocation,
			'map': map,
			'title': 'H+ Sport in Hollywood (actually Capitol Records)'
		}),
		marker2 = new google.maps.Marker({
			'position': storeLocation2,
			'map': map,
			'title': 'H+ Sport in Chavez Ravine (actually Dodger Stadium)'
		});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
	
	marker2.addListener('click', function() {
		infowindow2.open(map, marker2);
	});
}

