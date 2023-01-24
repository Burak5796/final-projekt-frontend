import { useState } from "react";


const Weather = () => {

    const [weather,setWeather] = useState(" ");
    const [info,setInfo] = useState(" ");


    const fetchData = () => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${weather}&limit=5&appid=faf8aef7239ae630b461ea5e265fabb5`)
	        .then(response => response.json())
	        .then(data => {console.log(data)
            setInfo('Country: ' + data[0].country + ' City: ' + data[0].name)})
	        .catch(err => console.error(err));
    }

    return(
        <>
        <input className="weatherin" onChange={(e) => {
            setWeather(e.target.value)
        }}></input>
        <button className="search-weather" onClick={fetchData}>Search</button>
        <p>{info}</p>
        </>
    )
}


export default Weather;