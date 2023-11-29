async function search(){
    var city=document.querySelector(".searchInput")
    var apiURL="https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=72a9e108e0a0bfa91de283587da78df5"
    console.log(apiURL)
    var raw=await fetch(apiURL)
    var data=await raw.json()
    console.log(data)
    if(data){
        if(data.message=='city not found'){
            alert(data.message)
            document.querySelector(".temp").innerHTML="0°c";
            document.querySelector(".city").innerHTML="";
            document.querySelector(".h").innerHTML=data.main.humidity+"0 %"
            document.querySelector(".w").innerHTML=data.wind.speed+"0 km/hr"
        }else{
            document.querySelector(".temp").innerHTML=(data.main.temp-273.15).toFixed(2)+"°c";
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".h").innerHTML=data.main.humidity+" %"
            document.querySelector(".w").innerHTML=data.wind.speed+" km/hr"

        }
        
    }
}