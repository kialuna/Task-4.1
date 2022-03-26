/*
Javascript for Task 4.1
Student number: 201578549
*/


var map; // The map object
var myCentreLat = 53.8;
var myCentreLng = -1.6;
var initialZoom = 10;
var infowindow = new google.maps.InfoWindow();
/* * The data that we want to map */ 


function infoCallback(infowindow, marker) {
	return function() {
		infowindow.open(map, marker);
	};
}
  
function addMarker(myPos,myTitle,myInfo) {
	var marker = new google.maps.Marker({
		position: myPos, 
		map: map, 
		title: myTitle,
		icon:'http://maps.google.com/mapfiles/kml/shapes/star.png'
	});
	var infowindow = new google.maps.InfoWindow({
		content: myInfo
	});
	google.maps.event.addListener(map, 'click', function() {     // infowindow closes when user clicks on the map
		infowindow.close();
	});
	
	google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}
  
function initialize() {
	var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
	var myOptions = {
		zoom: initialZoom,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
  
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	
	for (id in markerData) { 
		var info = "<div class=infowindow><h1>" + 
		markerData[id].name + "</h1><p><b>Population:</b> " + 
		markerData[id].pop 
		// +markerData[id].pic+"</p></div>"
		+ "</p><img src="+markerData[id].pic+" alt='' class='pic'></img></div>"; 
		addMarker(new google.maps.LatLng(markerData[id].lat,markerData[id].lng), markerData[id].name,info); 
	}
	

}