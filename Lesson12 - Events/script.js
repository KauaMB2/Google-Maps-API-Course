let map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: -34.397, lng: 150.644 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
    map.addListener('zoom_changed', () => {//Add a event in the map
        console.log('Changed the zoom')
    })
    map.addListener('dblclick', () => {//Add a event in the map
        console.log('Double click')
    })
    map.addListener('click', (event) => {//Add a event in the map
        console.log(event)
    })
}
initMap()