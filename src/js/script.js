let map;

function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.679056, 
            lng: -73.897570
        },
        zoom: 14
    });

    let locations = [
        {
            position: new google.maps.LatLng(40.679056, -73.897570),
        }
    ];
    
    const infoWindow = new google.maps.InfoWindow();
    
    for(let i = 0; i <= locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
        });

        const content = `
        <p>${locations[i].position}</p>
        `;

        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor: marker,
                map,
            });
            map.setCenter(marker.getPosition());
        })
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    window.initMap = initMap;
  });
