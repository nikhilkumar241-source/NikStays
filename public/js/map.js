mapboxgl.accessToken = mapToken;  

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard',
    projection: 'globe',
    zoom: 9,
    center: listing.geometry.coordinates,
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.enable();

map.on('style.load', () => {
    map.setFog({});
});

// Use the coordinates directly from the listing object
const marker = new mapboxgl.Marker({ color: "Red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            // Use backticks here so the template literal works
            .setHTML(`<h6>${listing.location}</h6><p>Exact location provided after booking!</p>`)
    )
    .addTo(map);

    