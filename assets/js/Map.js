const config = {
    minZoom: 0,
    maxZoom: 18,
};
const zoom     = 7;
const lat      = -23.4965407;
const lng      = -58.9319999;
const nameFile = 'stations.geojson';
const file     = "./data/" + nameFile;
let map;

const initMap = () => {
    map           = L.map("map", config).setView([lat, lng], zoom);
    const tileOSM = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
};

const getGeoData = async (url) => {
    let response = await fetch(url);
    let data     = await response.json();

    return data;
};

const addGeoJsonLayerWithClustering = (data) => {
    const markers      = L.markerClusterGroup();
    const geoJsonLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.distribuidor);
        }
    });

    markers.addLayer(geoJsonLayer);
    map.addLayer(markers);
};

getGeoData(file).then(data => {
    addGeoJsonLayerWithClustering(data); 
});

// Start map.
initMap();