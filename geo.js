$(document).ready(function() {
  
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lon="+
      position.coords.longitude+"&lat="+position.coords.latitude, function(current){
        var click = 0;
      $("#convert").on("click", function nbrClick(){

        click++;
        if (click%2 == 0) {
          $("#temp").html("<div id='tempnum'>" +Math.round(current.main.temp*100)/100+ ' °C'+"</div>");
          $("#convert").text(' °F');
        }
        else {
          
          $("#temp").html("<div id='tempnum'>" +Math.round((1.8*current.main.temp+32)*100)/100 + ' °F'+"</div>");
          $("#convert").text(' °C');
          
        }
        console.log(click," ", Math.round(2*100)/100);
        
      });
      var url;
      switch(current.weather[0].main) {
        case "Rain":
          url = "url('https://preview.ibb.co/mSBWRH/photo_Rain.jpg')";
          break;
       case "Haze":
          url = "url('http://preview.ibb.co/cD8RbH/photo_Haze.jpg')";
          break;   
        case "Clouds":
          url = "url('http://preview.ibb.co/cXDO6H/photo_Clouds.jpg')";
          break;
        case "Clear":
          url = "url('http://preview.ibb.co/g5Vgtx/photo_Clear.jpg')";
          break;  
      }
      
      $("body").css("background-image", url);
      $("#icon").html("<img class='rounded-circle' src="+current.weather[0].icon+">");
      $("#icon-text").html("<div>" +current.weather[0].description + "</div>");
      $("#temp").html("<div id='tempnum'>" +Math.round(current.main.temp*100)/100+ ' °C'+"</div>");
      $("#button-temp").html("<button class='btn btn-primary btn-block'>Created By Assi Yapo</div>");
      console.log(weather[0].icon);
    });

    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude +","+ position.coords.longitude +"&key=AIzaSyCfu8XESzc2o76ghMaRv0HoNLo1BsMdMNk", function(location){
      $("#location").html("<h4 class='text-center mb-1'>"+location.results[1].formatted_address+"</h4>");
    });
  });
}
  
});



