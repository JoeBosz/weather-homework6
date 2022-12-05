var  searchBtn=document.getElementById("searchBtn") 
var citySearch=document.getElementById("citySearch")
var weatherSource= 'https://api.openweathermap.org/data/2.5/forecast?&appid=e353137ebeb01b211cb86198e83815df&units=imperial'
var geoSource = 'http://api.openweathermap.org/geo/1.0/direct?appid=e353137ebeb01b211cb86198e83815df'

var currentCity= document.getElementById("city")
var localTemp= document.getElementById("localTemp")
var localCloudy= document.getElementById("localCloudy")
var localHumidity= document.getElementById("localHumidity")
var localWindSpeed= document.getElementById("localWindSpeed")
var imgWeather= document.getElementById("imgWeather")
var fiveDay = document.getElementById("fiveDay");


function weatherRequest(lat, lon){
    fetch(`${weatherSource}&lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
    .then((data => {
        console.log(data)
        currentCity.textContent=data.city.name
        localTemp.textContent=data.list[4].main.temp
        localCloudy.textContent=data.list[4].clouds.all
        localHumidity.textContent=data.list[4].main.humidity
        localWindSpeed.textContent=data.list[4].wind.speed

        imgWeather.innerHTML = `<img src='https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png' />`

        for (var i=12; i < data.list.length; i+=8){
            var currentDay = data.list[i];
            var currentDt = currentDay.dt_txt.split(" ")

            console.log(currentDt)

            var newDiv = `
            <div>
                <h6>${currentDt[0]}</h6>
                <p><b>Temp:</b> ${currentDay.main.temp}</p>
            </div>
            `

            fiveDay.innerHTML += newDiv;

        }
        })) 
}

function geoRequest(cityQuery){
    fetch(`${geoSource}&q=${cityQuery}`)
    .then((response) => response.json())
    .then((data => {
        if(data) {
            weatherRequest(data[0].lat, data[0].lon);
        }
    }))
}

searchBtn.addEventListener('click', function() { 


    geoRequest(citySearch.value);

    console.log("click")
   // console.log(citySearch.value)
   
})






