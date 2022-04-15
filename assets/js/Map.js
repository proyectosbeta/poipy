const config = {
    minZoom: 0,
    maxZoom: 18,
};
const zoom      = 7;
const lat       = -23.8965407;
const lng       = -56.9919999;
const nameFile  = 'stations.geojson';
const file      = "./data/" + nameFile;
const baseLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
const baseMaps = {
    "Open Street Map": baseLayer,
};
let map;

const initMap = () => {
    map = L.map("map", config).setView([lat, lng], zoom);

    baseLayer.addTo(map);
};

const getGeoData = async (url) => {
    let response = await fetch(url);
    let data     = await response.json();

    return data;
};

const onEachFeature = (feature, layer) => {
    layer.on('click', function (e) {
        const feature      = e.target.feature;
        const coordenates  = feature.geometry.coordinates;
        const properties   = feature.properties;
        const departamento = properties.departamento;
        const direccion    = properties.direccion;
        const distribuidor = properties.distribuidor;
        const distrito     = properties.distrito;
        const operador     = properties.operador;
        const tipo         = properties.tipo;
    
        onMapClick(coordenates);
        
        // var fieldA       = document.getElementById('pict');
        // fieldA.innerHTML ='<img src="' +e.target.feature.properties.Logo +'">';
        
        // var fieldB       = document.getElementById('pict2');
        // fieldB.innerHTML = '<img src="' +e.target.feature.properties.Logo +'">';
        
        const field1 = document.getElementById('f1');
        const field2 = document.getElementById('f2');
        const field3 = document.getElementById('f3');
        const field4 = document.getElementById('f4');
        const field5 = document.getElementById('f5');
        const field6 = document.getElementById('f6');

        field1.innerHTML = departamento;
        field2.innerHTML = direccion;
        field3.innerHTML = distribuidor;
        field4.innerHTML = distrito;
        field5.innerHTML = operador;
        field6.innerHTML = tipo;
    });
};

// Click marker
let clickmark;

// When you click on a circle, it calls the onMapClick function
// and passes the layers coordinates.
// I grab the coords which are X,Y, and
//I need to flip them to latLng for a marker.
const onMapClick = (coords) => {
    const coordenates = coords.toString().split(',');
    const latitude    = coordenates[1];
    const longitude   = coordenates[0];

    // If prior marker exists, remove it.
    if (clickmark != undefined) {
        map.removeLayer(clickmark);
    };

    clickmark = L.circleMarker([latitude, longitude],{
        radius     : 10,
        color      : "yellow",
        fillColor  :  "yellow",
        fillOpacity: 0.8
    }).addTo(map);
};

const addControlMap = (markersStationService) => {
    const overlayMaps = {
        "Estaciones de servicio": markersStationService
    };
    
    L.control.layers(baseMaps, overlayMaps).addTo(map);
};

const addGeoJsonLayerWithClustering = (data) => {
    const markersStationService = L.markerClusterGroup();
    const geoJsonLayer    = L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, {
                radius     : 6,
                opacity    : .5,
                color      : "blue",
                fillOpacity: 0.8
            }).bindTooltip(feature.properties.distribuidor);
        },
        onEachFeature: onEachFeature
    });

    markersStationService.addLayer(geoJsonLayer);
    map.addLayer(markersStationService);
    addControlMap(markersStationService);
};

getGeoData(file).then(data => {
    addGeoJsonLayerWithClustering(data); 
});


// Start map.
initMap();