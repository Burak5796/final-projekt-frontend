import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/searchweather.css';


const SearchWeather = () => {

    const [inputValue,setValue] = useState(" ");
    const [city,setCity] = useState(" ");
    const [temp,setTemp] = useState(" ");

    const navigate = useNavigate();


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
        <div className="search-container">
        <input className="temp-search" onChange={(e) => {
            setValue(e.target.value)
        }}></input>
        <button className="search-weather" onClick={fetchData}>Search</button>
        <p className="city-temp">{city}</p>
        <h1 className="temp">{temp}</h1>
        </div>
        </>
    )
}


export default SearchWeather;