$(function(){
  console.log('scripts loaded');

  var updateLocation = setInterval(location, 5000);

  function location() {
    var url = 'http://api.open-notify.org/iss-now.json';
    var data = [];

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      async: true,
      data: data,
      success: function(data){
        console.log(data);
        var latitude = data.iss_position.latitude;
        var longitude = data.iss_position.longitude;
        var url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + latitude + '&lon=' + longitude;
        var data2 = [];
        var html = '';

        $.ajax({
          type: 'GET',
          url: url2,
          dataType: 'json',
          async: true,
          data: data2,
          success: function(data2){
            console.log(data2);
            if (data2.address.city) {
              var city = data2.address.city + ', ';
            } else {
              var city = '';
            }

            if (data2.error) {
              html += 'The space station is currently over an ocean.';
              $('#results').html(html);
            } else {
              html += 'The space station is currently over ' + city + data2.address.country + '.';
              $('#results').html(html);
            }
          }
        });
      }
    });
  }
});
