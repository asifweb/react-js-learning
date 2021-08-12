import React, {useState, useEffect} from 'react'

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    if (e.key === 'Enter') {
      fetch(`${API_URL}/weather?q=${query}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setQuery('')
          setWeather(result)
        });
    }
  }

  useEffect(() => {
    const fetchWeather = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        var cord = position.coords;
        setLat(cord.latitude);
        setLong(cord.longitude);
      });
      await fetch(`${API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
        })
        .catch(err => console.log('Error: ', err))
    }
    fetchWeather();
  }, [lat, long])

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ?
      ((weather.main.temp > 16) ? 'app warm' : 'app')
      : 'app'}>
      <main>
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-box">
            <div className="temp">
              {weather.cod}
            </div>
            <div className="weather">
              Location Failed
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
