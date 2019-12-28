function initMap(){
    const loc = { lat: 34.018879, lng: -118.481987}
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({position: loc, map: map});
}