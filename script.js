const MAPBOX_ACCESS_TOKEN ='pk.eyJ1IjoidGhlbmlnaHRiYXQiLCJhIjoiY2t1ejNmZzluMDN6bDJvbHBveDZsZ2xzbiJ9.VCn-isZCPaF-ofw3qzI6BA'


navigator.geolocation.getCurrentPosition(Successlocation, Errorlocation, { 
    enableHighAccuracy: true
})
function setupmap(centerPosition){
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosition,
        zoom: 15
        })
        map.addControl(new mapboxgl.NavigationControl());

        const directionControls= new MapboxDirections({
            accessToken: MAPBOX_ACCESS_TOKEN
            })
        map.addControl(directionControls, 'top-left')

}

function Successlocation(position){
setupmap([position.coords.longitude, position.coords.latitude])
}

function Errorlocation(){
 setupmap([-2.24, 53.48])
}