let marker1, marker2;
let poly, geodesicPoly;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: 37.782, lng: -122.447 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        document.getElementById("info")
    )
    marker1 = new google.maps.Marker({
        map,
        draggable: true,
        position: { lat: 40.714, lng: -74.006 },
    })
    marker2 = new google.maps.Marker({
        map,
        draggable: true,
        position: { lat: 48.857, lng: 2.352 },
    })

    const bounds = new google.maps.LatLngBounds(
        marker1.getPosition(),
        marker2.getPosition()
    )

    map.fitBounds(bounds);
    google.maps.event.addListener(marker1, "position_changed", update);
    google.maps.event.addListener(marker2, "position_changed", update);
    poly = new google.maps.Polyline({
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map,
    })
    geodesicPoly = new google.maps.Polyline({
        strokeColor: "#CC0099",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true,
        map: map,
    })
    update()
}

function update() {
    const path = [marker1.getPosition(), marker2.getPosition()];

    poly.setPath(path);
    geodesicPoly.setPath(path);

    const heading = google.maps.geometry.spherical.computeHeading(
        path[0],
        path[1]
    )

    document.getElementById("heading").value = String(heading);
    document.getElementById("origin").value = String(path[0]);
    document.getElementById("destination").value = String(path[1]);
}

window.initMap = initMap;