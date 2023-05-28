let map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: -34.397, lng: 150.644 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
    var marker = new google.maps.Marker({//Add a landmark in the 
        position: { lat: -34.397, lng: 150.644 },//Landmark position
        map: map,//It will appear in the map variable
        title: 'Random landmark!',//Add a title(Put and keep your mouse above the landmark)
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',//Add a image to the marker
        label: 'B',//Add a label
        animation: google.maps.Animation.DROP,//It defines a animation
        draggable: true
    })
    let infoWindow = new google.maps.InfoWindow({
        content: '<div id="infoWindowContent"><h2>My InfoWindow!</h2></div>',
        //position: ,
        maxWidth: 200
    })
    marker.addListener('click', () => {
        infoWindow.open(map, marker)
    })
    //Remove
    //map.setMap(null)//Remove the landmark
}
initMap()