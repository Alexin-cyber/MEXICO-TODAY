// crea la mappa centrata su Mexico City creando un marker
const map = L.map('map').setView([19.4326, -99.1332], 6);
const marker = L.marker([19.4326, -99.1332]).addTo(map);
const button = document.getElementById('cancel');
const circle1 = L.circle([24.70596, -107.4205], {radius: 500000, color: 'red'});
const circle2 = L.circle([20.46576, -103.2938], {radius: 500000, color: 'blue'});
const circle3 = L.circle([24.95051578027029, -98.33130483894983], {radius: 250000, color: 'green'});
const circle4 = L.circle([27.206743109600296, -102.29838410773144], { radius: 250000,color: 'pink'});
const circle5 = L.circle([31.64172853075751, -106.41495623712879], {radius: 25000, color: 'yellow'});
const circle6 = L.circle([19.062373586598152, -101.69602774182832], {radius: 250000, color: 'orange'});

const marker1 = L.marker([24.70596, -107.4205]);
const marker2 = L.marker([20.596491036592266, -103.20087931690577]);
const marker3 = L.marker([24.95051578027029, -98.33130483894983]);
const marker4 = L.marker([27.206743109600296, -102.29838410773144]);
const marker5 = L.marker([31.64172853075751, -106.41495623712879]);
const marker6 = L.marker([19.062373586598152, -101.69602774182832]);

let circles = [circle1, circle2, circle3, circle4, circle5, circle6];
let markers = [marker, marker1, marker2, marker3, marker4, marker5, marker6];

button.addEventListener('click', () => {
    circles.forEach(c => c.remove());
    markers.forEach(c => c.remove());
});

// aggiunge le tiles (la mappa visiva)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

document.getElementById('cr1').addEventListener("click", () => {
    map.flyTo([24.70596, -107.4205], 6);

    marker1.bindPopup(
        "Questa è l'area controllata dal cartello Sinaloa!")
        .addTo(map);

    circle1.addTo(map);
});

document.getElementById('cr2').addEventListener("click", () => {
    map.flyTo([20.596491036592266, -103.20087931690577], 6);
    
    marker2.bindPopup(
        "Questa è l'area controllata dal cartello Jalisco Nuova Generazione!")
        .addTo(map);

    circle2.addTo(map);
});

document.getElementById('cr3').addEventListener("click", () => {
    map.flyTo([24.95051578027029, -98.33130483894983], 6);

    marker3.bindPopup(
        "Questa è l'area controllata dal cartello del Golfo!")
        .addTo(map);

    circle3.addTo(map);
});

document.getElementById('cr4').addEventListener("click", () => {
    map.flyTo([27.206743109600296, -102.29838410773144], 6);

    marker4.bindPopup(
        "Questa è l'area controllata dal cartello del Golfo!")
        .addTo(map);

    circle4.addTo(map);
});

document.getElementById('cr5').addEventListener("click", () => {
    map.flyTo([31.64172853075751, -106.41495623712879], 6);

    marker5.bindPopup(
        "Questa è l'area controllata dal Cartello di Juárez!")
        .addTo(map);

    circle5.addTo(map);
});

document.getElementById('cr6').addEventListener("click", () => {
    map.flyTo([19.062373586598152, -101.69602774182832], 6);
    
    marker6.bindPopup(
        "Questa è l'area controllata dal Cartello di Juárez!")
        .addTo(map);

    circle6.addTo(map);
});

marker.bindPopup("Questa è la capitale del Messico!").openPopup();
