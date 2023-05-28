let map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: 37.782, lng: -122.447 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
    initDrawing(map)
}
const initDrawing = (map) => {
    const drawingManager = new google.maps.drawing.DrawingManager({
        map: map,
        drawingMode: google.maps.drawing.OverlayType.CIRCLE,//Defines the selected drawing option when the page is loaded
        drawingControl: true,//Defines if the drawing control will appear or not
        drawingControlOptions: {//Defines if control options
            position: google.maps.ControlPosition.TOP_CENTER,//position
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']//Drawing options allowed
        },
        circleOptions: {//circle settings
            fillColor: 'blue'
        },
        rectangleOptions: {//rectangle settings
            fillColor: 'green'
        },
        polylineOptions: {//polyline settings
            fillColor: 'red'
        },
        polygonOptions: {//polygon settings
            fillColor: 'yellow'
        }
    })
    google.maps.event.addListener(drawingManager, 'polygoncomplete', (polygon) => {//When the polygon be completed
        console.log("Polygon completed!!\n", polygon)//Just print
        polygon.setEditable(true)//Set the editable of the polygon to true
    })
}
initMap()