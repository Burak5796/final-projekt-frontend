import { useState } from "react";


const Weather = () => {

    const [inputValue,setValue] = useState(" ");
    const [cityState,setState] = useState(" ");
    const [city,setCity] = useState(" ");
    const [temp,setTemp] = useState(" ");


    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
	        .then(response => response.json())
	        .then(data => {console.log(data)
                setState("Stadt")
                setCity(data.name)
                setTemp('Temperatur: ' + ((data.main.temp - 32) * 0.5556).toFixed() + ' °C')
                })
	        .catch(err => console.error(err));
    }

    return(
        <>
        <input className="weatherin" onChange={(e) => {
            setValue(e.target.value)
        }}></input>
        <button className="search-weather" onClick={fetchData}>Search</button>
        <h3>{cityState}</h3>
        <p>{city}</p>
        <p>{temp}</p>
        </>
    )
}


export default Weather;