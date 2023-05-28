let map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: 25.774, lng: -80.190 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map

    var triangleCoords = [
        { lat: 25.774, lng: -80.190 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        // { lat: 34.321, lng: -80.757 }
    ]

    let inner = [{ "lat": 25.869315793754758, "lng": -74.53055057754217 }, { "lat": 28.372270664588104, "lng": -70.22390995254217 }, { "lat": 24.916539443093285, "lng": -67.58719120254217 }, { "lat": 21.93306752280436, "lng": -68.02664432754217 }]
    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
        paths: [triangleCoords, inner],//line extremity
        strokeColor: '#FFE000',//edge color
        strokeOpacity: 0.8,//edge opacity
        strokeweight: 2,//edge weight
        fillcolor: 'green',//internal opacity
        editable: true,//Defines if it is editable or not
        draggable: true,//Defines if it is draggable
        fillOpacity: 0.35,//internal opacity
        geodesic: true//apply a curve in the polygon
    })
    bermudaTriangle.setMap(map)//Add the figure in the map

    // let clicked = []
    // bermudaTriangle.addListener('click', (event) => {
    //     const clickPosition = event.latLng
    //     const position = { lat: clickPosition.lat(), lng: clickPosition.lng() }
    //     console.log(position)
    //     clicked.push(position)
    //     if (clicked.length === 4) {
    //         console.log(JSON.stringify(clicked))
    //     }
    // })
}
initMap()