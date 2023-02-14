import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/searchweather.css';
import Picture from "../main-components/weatherdata-main/Picture.js";



const SearchWeather = () => {

    const picWeather = document.querySelector('.weather-bg');

    const [inputValue,setValue] = useState(" ");
    const [city,setCity] = useState(" ");
    const [temp,setTemp] = useState(" ");
    const [today,setDate] = useState(" ");


    // useStates for 3-Hour timestamp

    const [firstHour,setFirst] = useState(" ");
    const [secHour,setSec] = useState(" ");
    const [thirdHour,setThird] = useState(" ");
    const [fourthHour,setFourth] = useState(" ");
    const [fifthHour,setFifth] = useState(" ");
    
    const date = new Date().toLocaleDateString('de-DE');
    


    const navigate = useNavigate();



    // fetch Current Wetter Data

    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
	        .then(response => response.json())
	        .then(data => {console.log(data)
                if(data.weather[0].main === 'Clouds') {
                    picWeather.style.backgroundColor = "#475F6C";
                    picWeather.style.border = "1px solid black";
                } else if(data.weather[0].main === 'Clear') {
                    picWeather.style.backgroundColor = "#3494D6";
                    picWeather.style.border = "1px solid black";
                } else if(data.weather[0].main === 'Rain') {
                    picWeather.style.backgroundImage = "url(' ')";
                    picWeather.style.border = "1px solid black";
                } else if(data.weather[0].main === 'Snow') {
                    picWeather.style.backgroundImage = "";
                    picWeather.style.border = "1px solid black";
                } else if(data.weather[0].main === 'Drizzle') {
                    picWeather.style.backgroundImage = "url(' ')";
                    picWeather.style.border = "1px solid black";
                } else if(data.weather[0].main === 'Mist') {
                    picWeather.style.backgroundImage = "url(' ')";
                    picWeather.style.border = "1px solid black";
                }
                setCity(data.name)
                console.log(inputValue);
                setTemp(((data.main.temp - 32) * 0.5556).toFixed() + ' °C')
                console.log(data.weather[0].main);
                setDate(date);

                const lat = data.coord.lat;
                const lon = data.coord.lon;

                console.log('lon:',lon,'lat:',lat);


                // fetch für 3-Hour Steps

                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=15&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
	            .then(res => res.json())
	            .then(dat => {console.log('hier',dat)


                // set times for each

                const firstCast = new Date(dat.list[1].dt_txt).toLocaleString("de-DE").replace(",", " ");
                const secCast = new Date(dat.list[2].dt_txt).toLocaleString("de-DE").replace(",", " ");
                const thirdCast = new Date(dat.list[3].dt_txt).toLocaleString("de-DE").replace(",", " ");
                const fourthCast = new Date(dat.list[4].dt_txt).toLocaleString("de-DE").replace(",", " ");
                const fifthCast = new Date(dat.list[5].dt_txt).toLocaleString("de-DE").replace(",", " ");

                setFirst(firstCast);
                setSec(secCast);
                setThird(thirdCast);
                setFourth(fourthCast);
                setFifth(fifthCast);
                })
                })
	        .catch(err => console.error(err));
    }


    

    return(
        <>
        <div className="search-container">
        <div className="input-container">
        <input className="temp-input" placeholder="Suche" onChange={(e) => {
            setValue(e.target.value);
        }}></input>
        <br/>
        <button className="search-btn" onClick={fetchData}>Search</button>
        </div>
        <Picture />
        <div className="weather-bg">
        <h1 className="city-temp">{city}</h1>
        <h2>{today}</h2>
        <h2 className="temp">{temp}</h2>
        <div className="upper-brd">
        <div className="inner-brd-row">
            <p className="timestamp">{firstHour}</p>
        </div>
        <div className="inner-brd-row">
            <p className="timestamp">{secHour}</p>
        </div>
        <div className="inner-brd-row">
            <p className="timestamp">{thirdHour}</p>
        </div>
        </div>
        <div className="bot-brd">
        <div className="inner-brd-bot">
            <p className="timestamp">{fourthHour}</p>
        </div>
        <div className="inner-brd-bot">
            <p className="timestamp">{fifthHour}</p>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}


export default SearchWeather;