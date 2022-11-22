var  searchBtn=document.getElementById("searchBtn") 
var citySearch=document.getElementById("citySearch")
var weatherSource= 'https://api.github.com/https://api.openweathermap.org/data/2.5/weather?q=%22St.%20Louis&22%limit=18&appid=e353137ebeb01b211cb86198e83815df'

searchBtn.addEventListener('click', function() { 
fetch(weatherSource)
.then((response) => response.json())
.then((data => console.log(data))) 
    console.log("click")
    console.log(citySearch.value)
   
})



