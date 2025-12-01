import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {  WiHumidity, WiStrongWind, WiBarometer,  WiHorizon, } from "react-icons/wi";

import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloud, WiCloudy, WiShowers,
  WiRain, WiDayRain, WiNightAltRain, WiThunderstorm, WiSnow,
  WiFog,
} from "react-icons/wi";

import "./App.css";

export function Weather({icon, celsius , location, country, latitude, longitude,temperature, wind, humidity, uv, visible, pressure,}) {
  //Weather icons
   const icons = {
  "01d": <WiDaySunny size={120} />,
  "01n": <WiNightClear size={120} />,
  "02d": <WiDayCloudy size={120} />,
  "02n": <WiNightAltCloudy size={120} />,
  "03d": <WiCloud size={120} />,
  "03n": <WiCloud size={120} />,
  "04d": <WiCloudy size={120} />,
  "04n": <WiCloudy size={120} />,
  "09d": <WiShowers size={120} />,
  "09n": <WiShowers size={120} />,
  "10d": <WiDayRain size={120} />,
  "10n": <WiNightAltRain size={120} />,
  "11d": <WiThunderstorm size={120} />,
  "11n": <WiThunderstorm size={120} />,
  "13d": <WiSnow size={120} />,
  "13n": <WiSnow size={120} />,
  "50d": <WiFog size={120} />,
  "50n": <WiFog size={120} />
};
  return (
    <div id="weather-container">
      <div id="img">
      {icons[icon] || <WiDaySunny size={120}/>}
      </div>
      <div id="details">
        <h2 id="celcias">{celsius }°C</h2>
        <h1 id="location">{location}</h1>
        <h3 id="country">{country}</h3>
      </div>
      <div id="lan-lat">
        <div className="lan">
          <p>Latitude</p>
          <span>{latitude}</span>
        </div>
        <div className="lan">
          <p>Longitude</p>
          <span>{longitude}</span>
        </div>
      </div>
      <div id="sub-details">
        <div className="details">
          <WiDayCloudy className="icon" size={40} />
          <span>Feels like</span>
          <h4>{temperature}°C</h4>
        </div>
        <div className="details">
          <WiStrongWind className="icon" size={40} />
          <span>WNW</span>
          <h4>Force {wind}</h4>
        </div>
        <div className="details">
          <WiHumidity className="icon" size={40} />
          <span>Humidity</span>
          <h4>{humidity}%</h4>
        </div>
        <div className="details">
          <WiHorizon className="icon" size={40} />
          <span>UV</span>
          <h4>{uv}</h4>
        </div>
        <div className="details">
          <WiDayCloudy className="icon" size={40} />
          <span>Visibility</span>
          <h4>{visible} km</h4>
        </div>
        <div className="details">
          <WiBarometer className="icon" size={40} />
          <span>Pressure</span>
          <h4>{pressure} hPa</h4>
        </div>
      </div>
    </div>
  );
}

function App() {
  //useStates
  const [icon,seticon] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const [text, setText] = useState("Chennai");
  const [celsius , setcelsius ] = useState(0);
  const [location, setlocaton] = useState("");
  const [country, setcountry] = useState("");
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [temperature, settemperature] = useState(0);
  const [wind, setwind] = useState(0);
  const [humidity, sethumidity] = useState(0);
  const [uv, setuv] = useState("weak");
  const [visible, setvisible] = useState(0);
  const [pressure, setpressure] = useState(0);
  const apikey = "53c0a5ff7f8d96ed2b1dfdca0384c0ae";

  //Search function
  const Search = async () => {
    try {
      const URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=metric`);
      const response = await URL.json();
      console.log(response);
      if(response.cod == 401 || response.cod == 404 ){
        setloading(true);
        return;
      }
      setloading(false);
      console.log(response);
      seticon(response.weather[0].icon);
      setlocaton(response.name);
      setcelsius (Math.floor(response.main.temp));
      setcountry(response.sys.country);
      setlatitude(response.coord.lat);
      setlongitude(response.coord.lon);
      settemperature(Math.floor(response.main.feels_like));
      setwind(Math.floor(response.wind.speed));
      sethumidity(response.main.humidity);
      setvisible(response.visibility / 1000);
      setpressure(response.main.pressure);
      seterror(false);
    } catch (err) {
      seterror(true);
      console.error("Failed Occured :" + err);
    }
  };

  //useeffect for run one time of weather app
  useEffect(() => {
    Search();
  }, []);

  //Search Press Enter Key
  const EnterKey = (e) => {
    if (e.key === "Enter") {
      Search();
    }
  };

  return (
    <>
      <div id="head">Weather App</div>
      <div id="container">
        <div id="input-container">
          <input
            type="text"
            value={text}
            onInput={(e) => setText(e.target.value)}
            onKeyDown={(e) => EnterKey(e)}
          />
          <FaSearch id="icon" onClick={Search} />
        </div>
        {!loading && (
          <Weather
            icon={icon}
            celsius ={celsius }
            location={location}
            country={country}
            latitude={latitude}
            longitude={longitude}
            temperature={temperature}
            wind={wind}
            humidity={humidity}
            uv={uv}
            visible={visible}
            pressure={pressure}
          />
        )}
        {loading && <h1 id="error">Not fount</h1>}
      </div>
      <p id="copyright">
        Design by{" "}
        <a href="https://github.com/PUGAZHENTHI731/project.git">PUGAZHENTHI</a>
      </p>
    </>
  );
}

export default App;
