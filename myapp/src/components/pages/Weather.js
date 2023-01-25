import { useState } from "react";
import '../styles/weather.css';


const Weather = () => {

    const [inputValue,setValue] = useState(" ");
    const [city,setCity] = useState(" ");
    const [temp,setTemp] = useState(" ");


    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
	        .then(response => response.json())
	        .then(data => {console.log(data)
                setCity(data.name)
                setTemp(((data.main.temp - 32) * 0.5556).toFixed() + ' °C')
                })
	        .catch(err => console.error(err));
    }

    return(
        <>
        <input className="temp-search" onChange={(e) => {
            setValue(e.target.value)
        }}></input>
        <button className="search-weather" onClick={fetchData}>Search</button>
        <p className="city-temp">{city}</p>
        <h1 className="temp">{temp}</h1>
        </>
    )
}


export default Weather;