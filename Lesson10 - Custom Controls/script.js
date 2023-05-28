let map
const centerMap = { lat: -34.397, lng: 150.644 }
class CenterControl {
    constructor(map) {
        this.controlDiv = document.createElement('div')
        this.controlUI = document.createElement('div')
        this.controlText = document.createElement('div')

        this.controlUI.style.backgroundColor = '#fff'
        this.controlUI.style.border = '2px solid #ebebeb'
        this.controlUI.style.borderRadius = '3px'
        this.controlUI.style.padding = '6px'
        this.controlUI.style.cursor = 'pointer'
        this.controlUI.style.title = 'Center Map'
        this.controlUI.style.backgroundColor = '#fff'

        this.controlDiv.appendChild(this.controlUI)

        this.controlText.style.fontSize = '16px'
        this.controlText.style.textAlign = 'center'
        this.controlText.style.lineHeight = '20px'
        this.controlText.style.color = '#333'
        this.controlText.innerHTML = 'Center'

        this.controlUI.appendChild(this.controlText)
        this.controlUI.addEventListener('click', () => {//Add a event in the button
            map.panTo(centerMap)//Changes the position smoothly
            //map.setCenter(centerMap)//Changes the map position
        })
    }
}
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps")//It imports the library
    var mapOptions = {//Defines the options
        center: centerMap,//Defines the initial position of the map
        zoom: 8,//Defines the initial zoom level
    }
    map = new Map(document.getElementById('map'), mapOptions)//Creates the map
    const centerControl = new CenterControl(map)
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControl.controlDiv)//Add a new control button the map
}
initMap()