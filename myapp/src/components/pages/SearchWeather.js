import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/searchweather.css';



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
                    picWeather.style.backgroundImage = "url('https://i.gifer.com/origin/dd/ddedd3a2f4a3995d8cd1a8ab2033c9ce.gif')";
                    picWeather.style.backgroundRepeat = "no-repeat" 
                } else if(data.weather[0].main === 'Clear') {
                    picWeather.style.backgroundImage = "url('https://www.shbarcelona.com/blog/en/wp-content/uploads/2015/12/sky-sunny-clouds-cloudy.jpg')";
                } else if(data.weather[0].main === 'Rain') {
                    picWeather.style.backgroundImage = "url(' ')";
                } else if(data.weather[0].main === 'Snow') {
                    picWeather.style.backgroundImage = "url(' ')";
                } else if(data.weather[0].main === 'Drizzle') {
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
        <input className="temp-search" onChange={(e) => {
            setValue(e.target.value)
        }}></input>
        <button className="search-weather" onClick={fetchData}>Search</button>
        <div className="weather-img">
        <p className="city-temp">{city}</p>
        <h1 className="temp">{temp}</h1>
        </div>
        </div>
        </>
    )
}


export default SearchWeather;