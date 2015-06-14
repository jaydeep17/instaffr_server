$('#btn').click(function() {
    var shopName = $('#shopName').val();
    var offerTitle = $('#offerTitle').val();
    var offerDesc = $('#offerDesc').val();
    var offerType = $("input[type='radio']:checked").val();
    var lat = g_marker.position.lat();
    var lng = g_marker.position.lng();
    $.post('/offer/add', {
        shopName: shopName,
        offerType: offerTitle,
        offerDesc: offerDesc,
        offerType: offerType,
        lat: lat,
        lng: lng
    }).done(function(data) {
        console.log('done', data);
    });
});