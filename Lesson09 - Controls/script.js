let map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: -34.397, lng: 150.644 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
        disableDefaultUI: false,//It desables the default UI components(true -> disable)
        zoomControl: true,//It desables or not the zoom control(false -> disable)
        streetViewControl: true,//It desables or not the street view control(false -> disable)
        mapTypeControl: true,//It desables or not the map type control(false -> disable)
        mapTypeControlOptions: {//It defines the kind and the position of the map type control
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,//It defines the controler as a dropdown
            position: google.maps.ControlPosition.TOP_CENTER//It defines the position of the dropdown menu
        },
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP//It defines the button position
        }
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
}
initMap()