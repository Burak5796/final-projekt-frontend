import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/searchweather.css';
import Border from "./Border.js";



const SearchWeather = () => {

    const picWeather = document.querySelector('.weather-img');

    const [inputValue,setValue] = useState(" ");
    const [city,setCity] = useState(" ");
    const [temp,setTemp] = useState(" ");


    const navigate = useNavigate();


    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
	        .then(response => response.json())
	        .then(data => {console.log(data)
                if(data.weather[0].main === 'Clouds') {
                    picWeather.style.backgroundColor = "#475F6C";
                } else if(data.weather[0].main === 'Clear') {
                    picWeather.style.backgroundColor = "#3494D6";
                } else if(data.weather[0].main === 'Rain') {
                    picWeather.style.backgroundImage = "url(' ')";
                } else if(data.weather[0].main === 'Snow') {
                    picWeather.style.backgroundImage = "";
                } else if(data.weather[0].main === 'Drizzle') {
                    picWeather.style.backgroundImage = "url(' ')";
                } else if(data.weather[0].main === 'Mist') {
                    picWeather.style.backgroundImage = "url(' ')";
                } 
                setCity(data.name)
                console.log(inputValue);
                setTemp(((data.main.temp - 32) * 0.5556).toFixed() + ' °C')
                console.log(data.weather[0].main);
                })
	        .catch(err => console.error(err));
    }

    

    return(
        <>
        <div className="search-container">
        <input className="temp-search" placeholder="Suche" onChange={(e) => {
            setValue(e.target.value)
        }}></input>
        <button className="search-weather" onClick={fetchData}>Search</button>
        <div className="weather-img">
            <Border/>
        <h1 className="city-temp">{city}</h1>
        <h2 className="temp">{temp}</h2>  
        </div>
        </div>
        </>
    )
}


export default SearchWeather;