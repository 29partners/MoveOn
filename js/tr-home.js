$(document).ready(function(){

    $('#home-bookNow, .overlay-close').off().on('click' ,function(){
        toggleOverlay();
    });


    $(window).scroll(function(){
        scrollPage();
    });
});

$(window).load(function(){
    locationAutoComplete('from-location');
    locationAutoComplete('to-location');
    mapsLocationFinder();
});


function locationAutoComplete(documentId){
    var address = (document.getElementById(documentId));
    var autocomplete = new google.maps.places.Autocomplete(address);
    autocomplete.setTypes(['geocode']);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    });
}

function mapsLocationFinder(){
    var mapCanvas = document.getElementById('map-canvas');
    var latLong = new google.maps.LatLng(12.9562, 77.7019)
    var mapOptions = {
        center: latLong,
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)

    var marker=new google.maps.Marker({
        map: map,
        position:latLong,
        draggable: true
    });
    marker.setMap(map);
}

function toggleOverlay() {
    var overlayStatus = $('div.overlay');
    if(overlayStatus.hasClass('open')){
        overlayStatus.removeClass('open').addClass('close');
    }else{
        overlayStatus.removeClass('close').addClass('open');
    }
}

function scrollPage() {
    var sy = scrollY();
    if ( sy >= 0 ) {
        $('.nav-head.nav-home').addClass('sticky-header');
    }
    else {
        $('.nav-head.nav-home').removeClass('sticky-header');
    }
}

function scrollY() {
    return window.pageYOffset || $('.nav-head.nav-home').scrollTop;
}
