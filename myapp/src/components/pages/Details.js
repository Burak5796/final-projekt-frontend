import '../styles/details.css';
import Home from '../main-components/Home.js';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



const Details = () => {

    const [value,setValue] = useState(" ");
    const [wind,setWind] = useState(" ");
    const [name,setName] = useState(" ");
    const [temp,setTemp] = useState(" ");

    const [carouselDisplay,setCarousel] = useState(false);


    // usestate für bilder,text und pop

    const [carImg,setCarImg] = useState(' ');
    const [carText,setCarText] = useState(' ');
    const [pop,setPop] = useState(' ');
    


    const [displayWbg,setWbg] = useState(false);

    const fetching = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

          setWbg(true);
          setValue(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
          setWind(data.wind.speed.toFixed());
          setName(data.name);
      })
      .catch(err => {console.error(err)})



      fetch(`http://localhost:4000/details/${value}`)
        .then(response => response.json())
      .then(datas => {
        console.log(datas);
        setCarousel(true);
        setCarText(datas[0].descriptionImages);
        setCarImg(datas[0].img);
        setPop(datas[0].population)
    })

    }

    return(
        <>
        <Home />
        <div className='arrow'>
        <h2 className='headline-details'>Für eine detaillierte Suche für deine Stadt nutze unsere Suchfunktion</h2>
        <i className="fa-solid fa-arrow-down"></i>
        </div>
        <div className='input-container'>
            <input className='value' type='text' onChange={(e) => {
                setValue(e.target.value)
            }}></input>
            <button className='search-details' onClick={fetching}>Search</button>
        </div>
        <div className={`carousel-container ${carouselDisplay ? 'display-carousel' : 'no-carousel'}`}>
            <h2 className='headline-img'>Sehenswürdigkeiten</h2>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImg[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='head-city'>{carText[0]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImg[1]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='head-city'>{carText[1]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImg[2]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='head-city'>{carText[2]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImg[3]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='head-city'>{carText[3]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p className='pop'>Einwohnerzahl: {pop}</p>
        </div>
        <div className={`details-bg ${displayWbg ? 'display-weather' : 'display-weather-none'}`}>
            <h2 className='city-name'>{name}</h2>
            <p className='temperature'></p>
            <p className='windy'><i className="fa-solid fa-wind"></i> {wind} km/h</p>
        </div>
        </>
    )
}


export default Details;