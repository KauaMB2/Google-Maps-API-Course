let map
async function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 40.74, lng: -74.18 },
    })
    const imageBounds = {
        north: 40.773941,
        south: 40.712216,
        east: -74.12544,
        west: -74.22655,
    }
    historicalOverlay = new google.maps.GroundOverlay(
        "https://storage.googleapis.com/geo-devrel-public-buckets/newark_nj_1922-661x516.jpeg",//Set the image
        imageBounds, {
        map: map,//Defines the image map
        opacity: 0.5,//Defines the imageOpacity
        clickable: true//Defines if it is clickable
    })
    historicalOverlay.setMap(map)//Add the image in themap 

    historicalOverlay.addListener('click', (event) => {
        alert('It was clicked!')
    })
}

initMap()