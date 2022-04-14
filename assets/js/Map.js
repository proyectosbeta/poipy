const config = {
    minZoom: 0,
    maxZoom: 18,
};
const zoom = 7;
const lat  = -23.4965407;
const lng  = -58.9319999;
let map;

const initMap = () => {
    map           = L.map("map", config).setView([lat, lng], zoom);
    const tileOSM = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
};

const addDataStationService = () => {
    const nameFile = 'stations.geojson';

    $.getJSON("./data/" + nameFile, function(data){
        L.geoJson(data).addTo(map);
    });
};

initMap();
addDataStationService();
