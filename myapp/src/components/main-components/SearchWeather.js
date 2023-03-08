import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/searchweather.css';



const SearchWeather = () => {



    const [inputValue,setValue] = useState(" ");
    const [city,setCity] = useState(" ");
    const [temp,setTemp] = useState(" ");
    const [today,setDate] = useState(" ");


    const [displayBrd,setDisplayBrd] = useState(false);
    const [displayWbg,setWbg] = useState(false);





    // useStates for Days timestamp

    const [firstDay,setFirst] = useState(" ");
    const [secDay,setSec] = useState(" ");
    const [thirdDay,setThird] = useState(" ");
    const [fourthDay,setFourth] = useState(" ");
    const [fifthDay,setFifth] = useState(" ");
    const [sixthDay,setSix] = useState(" ");
    const [seventhDay,setSeven] = useState(" ");


    // useStates for daily temps

    const [firstTemp,setFirstTemp] = useState(" ");
    const [secTemp,setSecTemp] = useState(" ");
    const [thirdTemp,setThirdTemp] = useState(" ");
    const [fourthTemp,setFourthTemp] = useState(" ");
    const [fifthTemp,setFifthTemp] = useState(" ");
    const [sixthTemp,setSixthTemp] = useState(" ");



    const date = new Date().toLocaleDateString('de-DE');
    


    const navigate = useNavigate();



    // fetch Current Wetter Data

    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
	        .then(response => response.json())
	        .then(data => {console.log(data)

              /*  if(data.weather[0].main === 'Clouds') {
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

                */

                if(data.name) {
                    setDisplayBrd(true);
                    setWbg(true);
                }

                setCity(data.name)
                console.log(inputValue);
                setTemp(Math.round((data.main.temp - 32) * 0.5556) + ' °C')
                console.log(data.weather[0].main);
                setDate(date);

                const lat = data.coord.lat;
                const lon = data.coord.lon;

                console.log('lon:',lon,'lat:',lat);


                // fetch für Days Steps

                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`)
	            .then(res => res.json())
	            .then(dat => {console.log('hier',dat)


                // set days for each

                const options = {weekday: "long"};

                const day1 = new Date(dat.daily.time[0]);
                const day2 = new Date(dat.daily.time[1]);
                const day3 = new Date(dat.daily.time[2]);
                const day4 = new Date(dat.daily.time[3]);
                const day5 = new Date(dat.daily.time[4]);
                const day6 = new Date(dat.daily.time[5]);
                const day7 = new Date(dat.daily.time[6]);


                setFirst(new Intl.DateTimeFormat("de-DE", options).format(day1));
                setSec(new Intl.DateTimeFormat("de-DE", options).format(day2));
                setThird(new Intl.DateTimeFormat("de-DE", options).format(day3));
                setFourth(new Intl.DateTimeFormat("de-DE", options).format(day4));
                setFifth(new Intl.DateTimeFormat("de-DE", options).format(day5));
                setSix(new Intl.DateTimeFormat("de-DE", options).format(day6));
                setSeven(new Intl.DateTimeFormat("de-DE", options).format(day7));


                // set temp for days


                setFirstTemp(dat.daily.temperature_2m_max[1].toFixed() + ' °C');
                setSecTemp(dat.daily.temperature_2m_max[2].toFixed() + ' °C');
                setThirdTemp(dat.daily.temperature_2m_max[3].toFixed() + ' °C');
                setFourthTemp(dat.daily.temperature_2m_max[4].toFixed() + ' °C');
                setFifthTemp(dat.daily.temperature_2m_max[5].toFixed() + ' °C');
                setSixthTemp(dat.daily.temperature_2m_max[6].toFixed() + ' °C');
                
                
                })
                })
	        .catch(err => console.error(err));
    }


    

    return(
        <>
        <div className="search-container">
        <div className="input-container">
        <input type="text" className="temp-input" placeholder="Suche" onChange={(e) => {
            setValue(e.target.value)
        }}></input>
        <br/>
        <button className="search-btn" onClick={fetchData}>Search</button>
        </div>
        <div className={`weather-bg ${displayWbg ? 'display-weather' : 'display-weather-none'}`}>
        <h2 className="city-temp">{city}</h2>
        <h3>{firstDay} : {today}</h3>
        <h3 className="temp">{temp}</h3>
        <div className={`upper-brd ${displayBrd ? "display-brd-flex" : "display-brd-none"}`}>
        <div className="inner-brd-row">
            <p className="timestamp">{secDay}</p>
            <i className="fa-solid fa-cloud"></i>
            <p className="time-temp">{firstTemp}</p>
        </div>
        <div className="inner-brd-row">
            <p className="timestamp">{thirdDay}</p>
            <i className="fa-solid fa-cloud"></i>
            <p className="time-temp">{secTemp}</p>
        </div>
        <div className="inner-brd-row">
            <p className="timestamp">{fourthDay}</p>
            <i className="fa-solid fa-cloud"></i>
            <p className="time-temp">{thirdTemp}</p>
        </div>
        </div>
        <div className={`bot-brd ${displayBrd ? "display-brd-flex" : "display-brd-none"}`}>
        <div className="inner-brd-bot">
            <p className="timestamp">{fifthDay}</p>
            <i className="fa-solid fa-cloud"></i>
            <p className="time-temp">{fourthTemp}</p>
        </div>
        <div className="inner-brd-bot">
            <p className="timestamp">{sixthDay}</p>
            <i className="fa-solid fa-cloud"></i>
            <p className="time-temp">{fifthTemp}</p>
        </div>
        <div className="inner-brd-bot">
            <p className="timestamp">{seventhDay}</p>
            <i className="fa-solid fa-cloud"></i>
            <p className="time-temp">{sixthTemp}</p>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}


export default SearchWeather;