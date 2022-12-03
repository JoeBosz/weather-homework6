var  searchBtn=document.getElementById("searchBtn") 
var citySearch=document.getElementById("citySearch")
var weatherSource= 'https://api.openweathermap.org/data/2.5/forecast?lat=38.6319657&lon=-90.2428756&appid=e353137ebeb01b211cb86198e83815df&units=imperial'

searchBtn.addEventListener('click', function() { 
fetch(weatherSource)
.then((response) => response.json())
.then((data => console.log(data))) 
    console.log("click")
   // console.log(citySearch.value)
   
})






