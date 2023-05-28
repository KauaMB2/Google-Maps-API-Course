class MyMap {
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
        div.style.fontSize = '10px'
        div.style.backgroundColor = 'red'
        div.style.borderStyle = 'solid'
        div.style.borderWidth = '1px'
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
        mapTypeId: 'mymap',//roadmap, satellite, hybrid and terrain
        mapTypeControlOptions: {//Define the map type options
            mapTypeIds: ['roadmap', 'mymap', 'satellite', 'hybrid', 'terrain']//Defines the map types that can be selected
        }
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
    map.mapTypes.set('mymap', new MyMap(new google.maps.Size(256, 256)))//Create the pattern to "mymap"
}
initMap()