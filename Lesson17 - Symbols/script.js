let map
async function initMap() {
    const LIVERPOOL = { lat: 53.435380, lng: -2.978513 }
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: LIVERPOOL,//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map


    const svgImage = {
        // path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",//Defines the image
        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,//defines the svg picture
        fillColor: "blue",//picture color
        fillOpacity: 0.8,//picture opacity
        strokeWeight: 1,//picture edge weight
        rotation: 20,//picture rotation(degree)
        scale: 10//size
    }
    new google.maps.Marker({
        position: map.getCenter(),//Put the image in the center of our map
        icon: svgImage,//Define the icon
        map: map//Define the landmark map
    })

}
initMap()

