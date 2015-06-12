$(document).ready(function(){

    $('#home-bookNow, .overlay-close').off().on('click' ,function(){
        toggleOverlay();
    });

});

$(window).load(function(){
    locationAutoComplete('from-location');
    locationAutoComplete('to-location');
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

function toggleOverlay() {
    var overlayStatus = $('div.overlay');
    if(overlayStatus.hasClass('open')){
        overlayStatus.removeClass('open').addClass('close');
    }else{
        overlayStatus.removeClass('close').addClass('open');
    }
}
