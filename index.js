let back=document.getElementById('contain')
let apiKey = "1e3e8f230b6064d27976e41163a82b77";
async function getWeather(city="nagpur") {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    document.getElementById('weath2').innerHTML=`<div>
    <h1>${data.name}</h1>
     <h3 id="main">${data.weather[0].main}</h3>
    <h2 id="temp">${data.main.temp}°C</h2>
    <div id="sun"><h4> <img src="./Assets/icons8-sunrise-80.png">${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</h4>
    <h4><img src="../Assets/icons8-sunset-80.png">${new Date(data.sys.sunset*1000).toLocaleTimeString()}</h4></div></div>`;

    document.getElementById('weath3').innerHTML=`<div id="first">
    <p><img src="../Assets/icons8-humidity-30(1).png" ><br>Humidity<br>${data.main.humidity}%</p>
    <p><img src="../Assets/icons8-pressure-50.png" ><br>Pressure<br>${data.main.pressure}hPa</p>
    <p><img src="../Assets/icons8-windsock-50.png" ><br>Wind<br>${data.wind.speed}Km/h</p></div>
    <div id="second">
    <p><img src="../Assets/icons8-sun-50.png" ><br>Feels-like<br>${data.main.feels_like}</p>
    <p><img src="../Assets/icons8-low-temprature-24.png" ><br>Min-Temp<br>${data.main.temp_min}°C</p>
    <p><img src="../Assets/icons8-high-temprature-24.png" ><br>Max-Temp<br>${data.main.temp_max}°C</p></div>
    <div id="third">
    <p><img src="../Assets/icons8-visibility-50.png"><br>Visibility<br>${data.visibility}</p>
    <p><img src="../Assets/icons8-180-degree-32.png"><br>Degree<br>${data.wind.deg}</p>
    <p><img src="../Assets/icons8-blow-44.png"><br>Gust<br>${data.wind.gust}</p></div>`
    console.log(data)

    // document.getElementById('contain').style.background="linear-gradient(to right, red, yellow)";
    if(data.main.temp>=35){
      document.getElementById('contain').style.background="linear-gradient(to right, #c21500, #ffc500)";
      document.getElementById('contain').style.boxShadow="2px 5px 10px rgb(176, 162, 114)";
      document.getElementById('contain').style.color="white";
      document.getElementById('main').innerHTML=`<img src="../Assets/sun_11057157.png" >`
    }else if(data.main.temp<35 && data.main.temp>=15){
      document.getElementById('contain').style.background="linear-gradient(to right, #d53369, #cbad6d)";
      document.getElementById('contain').style.boxShadow="2px 5px 10px rgba(197, 173, 122, 0.7)";
      document.getElementById('contain').style.color="white";
      document.getElementById('main').innerHTML=`<img src="../Assets/cloudicon.png" >`
    }else if(data.main.temp<15){
      document.getElementById('contain').style.background="linear-gradient(to right, #4b6cb7, #182848)";
      document.getElementById('contain').style.boxShadow="2px 5px 10px rgb(38, 60, 103)"
      document.getElementById('contain').style.color="white";
       document.getElementById('main').innerHTML=`<img src="../Assets/cloud-rain-icon-2.png" >`
    }
  }
  catch(error){
    console.log(error)
  }
}

function searchBtn(){
  document.getElementById('weath').innerHTML=`<input type="text" id="cityInput" placeholder="Enter City:">
  <button onclick="searchCity()">🔍</button>`;
}

function searchCity(){
  let city=document.getElementById('cityInput').value;
  if(city){
    getWeather(city);
  }
}
getWeather();
searchBtn();
