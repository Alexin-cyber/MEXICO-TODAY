// crea la mappa centrata su Mexico City
const map = L.map('map').setView([19.4326, -99.1332], 13);;
const marker = L.marker([19.4326, -99.1332]).addTo(map);

// aggiunge le tiles (la mappa visiva)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

marker.bindPopup("Questo è la citta del Messico, la capitale del Messico").openPopup();

/*
map.on('click', function(e) {
    L.marker(e.latlng).addTo(map).bindPopup("Hai cliccato qui!").openPopup();
});
*/


L.circle([45.46, 9.19], {
    radius: 500,
    color: 'red'
}).addTo(map);

map.on('click', function(e) {
    console.log(e.latlng.lat, e.latlng.lng);
});
