import L from "leaflet";
navigator.geolocation.getCurrentPosition(loc=>{
                xsss(loc.coords.latitude, loc.coords.longitude);
        });

        function xsss(lat,log){
          var map = L.map('map').setView([lat, log], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; Sharkbyteapp'
}).addTo(map);

L.marker([lat, log]).addTo(map)
    .bindPopup('Here are You')
    .openPopup();
        };