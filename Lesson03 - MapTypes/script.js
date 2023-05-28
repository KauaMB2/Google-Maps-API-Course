let map;
var button = document.getElementById("change")
var array = ["roadmap", "satellite", "hybrid", "terrain"]
var index = 0
button.addEventListener('click', () => {
    ++index
    if (index % 4 == 0) {
        index = 0
    }
    map.setMapTypeId(array[index])//Select a map
    console.log(array[index], index)
})
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
        mapTypeId: 'roadmap',//roadmap, satellite, hybrid and terrain
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']//Defines the map types that can be selected
        }
    });
}
initMap();