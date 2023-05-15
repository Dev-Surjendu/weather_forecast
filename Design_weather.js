function getWeather(city){
  const settings = {
    url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=f04c7395ed903d5f8c068e3cbeb068f5",
    method: "GET",
};


  $.ajax(settings).done(function (response) {

    $("#temp").html(Math.round(response.main.temp));
    $("#day0").html(Math.round(response.main.temp))
    $("#cloud").html(response.clouds.all);
    $("#humidity").html(response.main.humidity);
    $("#feels").html(response.main.feels_like);
    $("#speed").html(response.wind.speed);
    console.log(response)
  });

    var settings2 = {
      async: true,
      crossDomain: true,
      url: "https://api.weatherbit.io/v2.0/forecast/daily?city=" + city + "&key=1ba8671d42474523bec78afaa13516ca",
      method: "GET",
  };
       var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      
      $("#cityName").html(city);
      $.ajax(settings2).done(function (response) {
        $("#day1_num").html()
        for (var i = 0; i<weekday.length; i++){

          const d = new Date(response.data[i]["datetime"]);
          let day = d.getDay();
          $("#day"+i+"_num").html(weekday[day])

          $("#day"+(i+1)).html(Math.round(response.data[i+1]["temp"]))          
        }
      });      
}

$("#submit").on("click",function(e){
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Puruliya")

$(".dropdown-item").on("click",function (e) {
  getWeather(e.target.innerHTML)
})