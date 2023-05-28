let map
async function initMap() {
    const MANCHESTER = { lat: 53.453632, lng: -2.256136 }
    const LONDRES = { lat: 51.488667, lng: -0.100473 }
    const LIVERPOOL = { lat: 53.435380, lng: -2.978513 }
    const RECTANGLE_BOUNDS = {
        north: 46.680082213381574,
        south: -9.559701515624965,
        east: 55.838712726148,
        west: 9.358755515625035
    }
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: LONDRES,//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map


    //Circle
    const circle = new google.maps.Circle({
        strokeColor: 'green',//perimeter color
        strokeWeight: 2,//perimeter weight
        strokeOpacity: 1,//perimeter opacity(100%)
        fillColor: '#FF0000',//color
        fillOpacity: 0.4,//opacity(40%)
        center: LONDRES,//place
        radius: 10000,//radius
        map: map,//the map
        draggable: true,//Defines if it is draggable
        editable: true//Defines if it is editable or not
    })

    //Polyline
    const poly = new google.maps.Polyline({
        //path: [LIVERPOOL, MANCHESTER, LONDRES],
        path: [LIVERPOOL, MANCHESTER],//The lines extremities  
        strokeColor: '#FF0000',//Line color
        strokeWeight: 5,//line weight
        strokeOpacity: 1,//line opacity
        draggable: true,//Defines if it is draggable
        editable: true//Defines if it is editable or not
    })
    poly.setMap(map)//Add the line in the map
    setTimeout(() => {
        poly.getPath().push(new google.maps.LatLng(circle.getCenter().lat(), circle.getCenter().lng()))//Draw other line
    }, 2000)//Two seconds after loaded the page, other line will be drawn 


    //Rectangle
    const rectangle = new google.maps.Rectangle({
        bounds: RECTANGLE_BOUNDS,//Bounds of the rectangle
        strokeColor: '#FF0000',//Line color
        strokeWeight: 5,//Line weight
        strokeOpacity: 1,//Line opacity
        draggable: true,//Defines if it is draggable
        editable: true,//Defines if it is editable or not
        map: map//Defines the map the rectangle will appear
    })
}
initMap()