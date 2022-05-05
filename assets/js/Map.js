const config = {
    minZoom: 0,
    maxZoom: 18,
};
const zoom       = 7;
let latitude     = -23.8965407;
let longitude    = -56.9919999;
const nameFiles  = [
    'station',
    'hospital',
    'biggie',
];
const baseLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
const baseMaps = {
    "Open Street Map": baseLayer,
};
let map;
let markersStationServices;
let markersHospitals;
let markersBiggies;

const initMap = () => {
    map = L.map("map", config).setView([latitude, longitude], zoom);

    baseLayer.addTo(map);
};

const getGeoData = async (url) => {
    let response = await fetch(url);
    let data     = await response.json();

    return data;
};

const onEachFeatureStationService = (feature, layer) => {
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
        
        const title_side_bar = document.getElementById('title_side_bar');
        const field1_1       = document.getElementById('f1field');
        const field2_1       = document.getElementById('f2field');
        const field3_1       = document.getElementById('f3field');
        const field4_1       = document.getElementById('f4field');
        const field5_1       = document.getElementById('f5field');
        const field6_1       = document.getElementById('f6field');
        const field1         = document.getElementById('f1');
        const field2         = document.getElementById('f2');
        const field3         = document.getElementById('f3');
        const field4         = document.getElementById('f4');
        const field5         = document.getElementById('f5');
        const field6         = document.getElementById('f6');

        title_side_bar.innerHTML = "Estaciones de servicio";
        field1_1.innerHTML       = "Departamento";
        field2_1.innerHTML       = "Direcci&oacute;n";
        field3_1.innerHTML       = "Distribuidor";
        field4_1.innerHTML       = "Distrito";
        field5_1.innerHTML       = "Operador";
        field6_1.innerHTML       = "Tipo";
        field1.innerHTML         = departamento;
        field2.innerHTML         = direccion;
        field3.innerHTML         = distribuidor;
        field4.innerHTML         = distrito;
        field5.innerHTML         = operador;
        field6.innerHTML         = tipo;
    });
};

const onEachFeatureHospital = (feature, layer) => {
    layer.on('click', function (e) {
        const feature     = e.target.feature;
        const coordenates = feature.geometry.coordinates;
        const properties  = feature.properties;
        const nombre      = properties.nombre;
        const direccion   = properties.direccion;
        const responsable = properties.responsabl;
        const telefono    = properties.telefono;
        const estado      = properties.estado;
        const tipo        = properties.tipo;
    
        onMapClick(coordenates);
        
        // var fieldA       = document.getElementById('pict');
        // fieldA.innerHTML ='<img src="' +e.target.feature.properties.Logo +'">';
        
        // var fieldB       = document.getElementById('pict2');
        // fieldB.innerHTML = '<img src="' +e.target.feature.properties.Logo +'">';
        
        const title_side_bar = document.getElementById('title_side_bar');
        const field1_1       = document.getElementById('f1field');
        const field2_1       = document.getElementById('f2field');
        const field3_1       = document.getElementById('f3field');
        const field4_1       = document.getElementById('f4field');
        const field5_1       = document.getElementById('f5field');
        const field6_1       = document.getElementById('f6field');
        const field1         = document.getElementById('f1');
        const field2         = document.getElementById('f2');
        const field3         = document.getElementById('f3');
        const field4         = document.getElementById('f4');
        const field5         = document.getElementById('f5');
        const field6         = document.getElementById('f6');

        title_side_bar.innerHTML = "Hospitales";
        field1_1.innerHTML       = "Nombre";
        field2_1.innerHTML       = "Direcci&oacute;n";
        field3_1.innerHTML       = "Responsable";
        field4_1.innerHTML       = "Tel&eacute;fono";
        field5_1.innerHTML       = "Estado";
        field6_1.innerHTML       = "Tipo";
        field1.innerHTML         = nombre;
        field2.innerHTML         = direccion;
        field3.innerHTML         = responsable;
        field4.innerHTML         = telefono;
        field5.innerHTML         = estado;
        field6.innerHTML         = tipo;
    });
};

const onEachFeatureBiggie = (feature, layer) => {
    layer.on('click', function (e) {
        const feature     = e.target.feature;
        const coordenates = feature.geometry.coordinates;
        const properties  = feature.properties;
        const nombre      = properties.nombre;
        const direccion   = properties.direccion;
        const responsable = properties.responsabl;
        const telefono    = properties.telefono;
        const estado      = properties.estado;
        const tipo        = properties.tipo;
    
        onMapClick(coordenates);
        
        // var fieldA       = document.getElementById('pict');
        // fieldA.innerHTML ='<img src="' +e.target.feature.properties.Logo +'">';
        
        // var fieldB       = document.getElementById('pict2');
        // fieldB.innerHTML = '<img src="' +e.target.feature.properties.Logo +'">';
        
        const title_side_bar = document.getElementById('title_side_bar');
        const field1_1       = document.getElementById('f1field');
        const field2_1       = document.getElementById('f2field');
        const field3_1       = document.getElementById('f3field');
        const field4_1       = document.getElementById('f4field');
        const field5_1       = document.getElementById('f5field');
        const field6_1       = document.getElementById('f6field');
        const field1         = document.getElementById('f1');
        const field2         = document.getElementById('f2');
        const field3         = document.getElementById('f3');
        const field4         = document.getElementById('f4');
        const field5         = document.getElementById('f5');
        const field6         = document.getElementById('f6');

        title_side_bar.innerHTML = "Biggies";
        field1_1.innerHTML       = "Nombre";
        field2_1.innerHTML       = "Direcci&oacute;n";
        field3_1.innerHTML       = "Responsable";
        field4_1.innerHTML       = "Tel&eacute;fono";
        field5_1.innerHTML       = "Estado";
        field6_1.innerHTML       = "Tipo";
        field1.innerHTML         = nombre;
        field2.innerHTML         = direccion;
        field3.innerHTML         = responsable;
        field4.innerHTML         = telefono;
        field5.innerHTML         = estado;
        field6.innerHTML         = tipo;
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
        radius     : 30,
        color      : "yellow",
        fillColor  :  "yellow",
        fillOpacity: 0.8
    }).addTo(map);
};

const addControlMap = (markers) => {
    const overlayMaps = {
        "&nbsp;<img src='./assets/img/station.png' width='24' height='28'>&nbsp;Estaciones de servicio": markers[0],
        "&nbsp;<img src='./assets/img/hospital.png' width='24' height='28'>&nbsp;Hospitales": markers[1],
        "&nbsp;<img src='./assets/img/biggie.png' width='24' height='28'>&nbsp;Biggies": markers[2],
    };
    
    L.control.locate({
        locateOptions: {
            enableHighAccuracy: true,
            maxZoom           : 13,
        },
        strings: {
            title: "Muéstrame dónde estoy, yo!"
        },
        showPopup: false,
    }).addTo(map);
    L.control.layers(baseMaps, overlayMaps).addTo(map);
};

const stationServiceLayer = (data) => {
    const geoJsonLayer = L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, {
                icon: L.icon({
                  iconUrl    : "assets/img/station.png",
                  iconSize   : [24, 28],
                  iconAnchor : [12, 28],
                  popupAnchor: [0, -25]
                }),
                title: feature.properties.distribuidor,
                riseOnHover: true
              });
        },
        onEachFeature: onEachFeatureStationService
    });
    markersStationServices = L.markerClusterGroup();

    markersStationServices.addLayer(geoJsonLayer);
    map.addLayer(markersStationServices);
};

const hospitalLayer = (data) => {
    const geoJsonLayer = L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, {
                icon: L.icon({
                  iconUrl    : "assets/img/hospital.png",
                  iconSize   : [24, 28],
                  iconAnchor : [12, 28],
                  popupAnchor: [0, -25]
                }),
                title: feature.properties.nombre,
                riseOnHover: true
              });
        },
        onEachFeature: onEachFeatureHospital
    });
    markersHospitals = L.markerClusterGroup();

    markersHospitals.addLayer(geoJsonLayer);
    map.addLayer(markersHospitals);
};

const biggieLayer = (data) => {
    const geoJsonLayer = L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, {
                icon: L.icon({
                  iconUrl    : "assets/img/biggie.png",
                  iconSize   : [24, 28],
                  iconAnchor : [12, 28],
                  popupAnchor: [0, -25]
                }),
                title: feature.properties.nombre,
                riseOnHover: true
              });
        },
        onEachFeature: onEachFeatureBiggie
    });
    markersBiggies = L.markerClusterGroup();

    markersBiggies.addLayer(geoJsonLayer);
    map.addLayer(markersBiggies);
};

const addGeoJsonLayerWithClustering = (element, data) => {
    switch (element){
        case 'station':
            stationServiceLayer(data);
            break;
        case 'hospital': 
            hospitalLayer(data);
            break;
        case 'biggie': 
            biggieLayer(data);
            break;
    }
};

let promises = [];

nameFiles.forEach(element => {
    const extention = '.geojson';
    const file      = "./data/" + element + extention;
    const promise   = new Promise((resolve, reject) => {
        getGeoData(file).then(data => {
            addGeoJsonLayerWithClustering(element, data); 
            resolve();
        });
    });

    promises.push(promise);
});

// Start map.
initMap();

Promise.all(promises).then((results) => {
    const markers = [
        markersStationServices,
        markersHospitals,
        markersBiggies,
    ];

    addControlMap(markers);
}).catch((error) => {
    console.log("Error: ", error);
});