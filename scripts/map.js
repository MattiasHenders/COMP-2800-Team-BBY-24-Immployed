
//Adds the map with address marker at jobsite.
function loadMap(address) {
    
    var platform = new H.service.Platform({
    'apikey': 'DA5zlU6eClctHv7fu6lSYISpHh7KzZ1hCYTK6sG4VOg'
    });

    var service = platform.getSearchService();
  
    var defaultLayers = platform.createDefaultLayers();

    var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 9.5,
        center: { lat: 49.2057, lng: -122.9110 },
        pixelRatio: window.devicePixelRatio || 10
      });

    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    
    service.geocode({
        q: address
      }, (result) => {
        // Add a marker for each location found
        result.items.forEach((item) => {
            ui.addBubble(new H.ui.InfoBubble(item.position, {
                content: item.address.label
        }));
    });
}, alert)};
  
document.addEventListener('DOMContentLoaded', function() {
    let currentJob = db.collection("job_posts").doc(location.hash.substring(1));
    currentJob.get().then(function (doc) { 
        let address = doc.data().address; 
        loadMap(address);
    }); 
});