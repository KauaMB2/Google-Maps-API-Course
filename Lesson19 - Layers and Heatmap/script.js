let map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: { lat: 37.782, lng: -122.447 },//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
    const heatmapData = [
        new google.maps.LatLng(37.782, -122.447),
        new google.maps.LatLng(37.782, -122.445),
        new google.maps.LatLng(37.782, -122.443),
        new google.maps.LatLng(37.782, -122.441),
        new google.maps.LatLng(37.782, -122.439),
        new google.maps.LatLng(37.782, -122.437),
        new google.maps.LatLng(37.782, -122.435),
        new google.maps.LatLng(37.785, -122.447),
        new google.maps.LatLng(37.785, -122.445),
        new google.maps.LatLng(37.785, -122.443),
        new google.maps.LatLng(37.785, -122.441),
        new google.maps.LatLng(37.785, -122.439),
        new google.maps.LatLng(37.785, -122.437),
        new google.maps.LatLng(37.785, -122.435)
    ]

    //Heatmap layer
    const heatMap = new google.maps.visualization.HeatmapLayer({//Define a heatmap layer
        data: heatmapData,//It add the list of heat points
        map: map//map of the points
    })
    map.addListener('click', (event) => {
        heatmapData.push(event.latLng)//It adds the heat point in the map
        heatMap.setData(heatmapData)//It updates the heatMap inside the map
    })

    //Transit layer
    // let transitLayer = new google.maps.TransitLayer()//Get the transit layer
    // transitLayer.setMap(map)//Put the transit layer in the map

    //Bike layer
    // let bikeLayer = new google.maps.BicyclingLayer()//Get the bicycling layer
    // bikeLayer.setMap(map)//Put the bicycling layer in the map

}
initMap()