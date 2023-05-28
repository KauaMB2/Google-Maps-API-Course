class OverlayMap {
    constructor(tileSize) {//constructor method
        this.tileSize = tileSize//Define tile size
        this.maxZoom = 18//Defines max zoom
        this.name = 'My map'// Defines
        this.alt = 'The map doesnt loaded'// Defines
    }
    getTile(coord, zoom, ownerDocument) {
        var div = ownerDocument.createElement('div')
        div.innerHTML = 'Kauã'
        div.style.width = this.tileSize.width + "px"
        div.style.height = this.tileSize.height + "px"
        div.style.fontSize = '20px'
        div.style.borderStyle = 'solid'
        div.style.borderWidth = '5px'
        div.style.borderColor = '#333'
        return div
    }
}
let map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: -34.397, lng: 150.644 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
    map.overlayMapTypes.insertAt(0, new OverlayMap(new google.maps.Size(256, 256)))//Create the pattern to "mymap"
}
initMap()