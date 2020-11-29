mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaWplZXRtb3VyeWEiLCJhIjoiY2toeDQybWV4MDVraDJya2I1bnl4bGt4diJ9.WKGdpCI2hibS3d0iojBaFQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([72.877656, 19.075984])
}
function setupMap(center){
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 16
});
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-left');

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
      });
      

      map.addControl(directions, 'top-left');
      
}