let apikey = "9aa1785207fadc5f3577dbb36d344e92";

const fetchwthr = async () =>{
    let city_name = document.getElementById('city_value').value;
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
    +city_name
    +"&units=metric"
    +"&appid="+apikey,{
    headers:{
        Accept:'application/json'
            }
    });
    const res = await data.json();
    console.log(res);
    if(res.message == "city not found")
    {
        alert("Please Enter a valid City");
    }
    else
    {
            const displaywthr = () =>{ //displaying weather
            //destructuring data received from API
            const { name } = res;
            const { icon , description } = res.weather[0];
            const { temp , humidity } = res.main;
            const { speed } = res.wind;
            const  timezone  = res.timezone;    
            console.log(name,icon,description,temp,humidity,speed,timezone); 

            //putting the values received from API
            document.title = name;
            document.getElementById('temp_city').innerHTML = name;
            document.getElementById('temper').innerHTML = temp+"°C";
            document.getElementById('tz').innerHTML = timezone;
            document.getElementById('icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.getElementById('desc').innerHTML = description;
            document.getElementById('hum').innerHTML = humidity+"%";
            document.getElementById('ws').innerHTML = speed+"km/h";
        }
     displaywthr();
    }

    document.body.addEventListener("keypress",function(event){
        if(event.key == "Enter"){
            fetchwthr();
        }
    });
 
}