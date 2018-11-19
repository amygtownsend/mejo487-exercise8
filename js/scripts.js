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
      }
    });
  }
});
