let map;
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    });
}
initMap();