import { useState } from "react";


const Test = () => {

    
    const [weather,setWe] = useState(" ");

    const fetchData = () => {
        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=faf8aef7239ae630b461ea5e265fabb5`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0]);
            setWe("Country: " + data[0].country)
        })
    }

    return(
        <>
        <input className="weather-search"></input>
        <button className="test-search" onClick={fetchData}>searching</button>
        <p>{weather}</p>
        </>
    )
}


export default Test;