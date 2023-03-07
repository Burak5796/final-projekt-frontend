import Carousel from 'react-bootstrap/Carousel';
import '../styles/example.css';
import { useState } from 'react';
import Home from '../main-components/Home.js';



const London = () => {

    const [london,setLondon] = useState(" ");
    const [wind,setWind] = useState(" ");

    const fetching = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          setLondon(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
          setWind(data.wind.speed.toFixed())
      })
      .catch(err => {console.error(err)})
    }

    return(
        <>
        <Home />
        <h3 className='headline-example'>Sehenswürdigkeiten</h3>
        <div className='example-container' onLoad={fetching}>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.itinari.com/pages/images/original/089bc101-22cd-4ab6-9a06-b194e72e7192-istock-497022097.jpg?ch=DPR&dpr=2.625&w=1600&s=98cf3b34ba2b924b6132e3445c4d4e18"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='rom-head'>Big Ben</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/whats-on/event-pages/buckinghampalace1920x1080.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='berlin-head'>Buckingham Palace</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.britannica.com/12/127112-050-F4DD3B7A/British-Museum-London.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='istanbul-head'>British Museum</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mywowo.net/media/images/cache/roma_foro_romano_02_inizio_percorso_jpg_1200_630_cover_85.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='la-head'>Forum Romanum</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <h3 className='location'>Location</h3>
        <img className='maps' src='https://www.google.de/maps/vt/data=MqUtu5s0FbF8TRgPoBIgFQouSQGT8E-1gmtLqU_zoaZw4Z4KTZx4ybRM6bhNO-c0D-thGvikyj0dzB5czkLpAZ3hYnQlES-H5M3gKJ530D9-pSzGQZZVlN70DbIKmfZzU9pe9jjy40kyXy5xGaVNCekX-vJ-1ItA78tiYTaQfP1GQcb-jhEfOm5FT0thFq4r9TwbgF4RC2E__0gwp_1G4mk7-lauLzAN72BIr-3XC6vvpqH2zJs' alt='london'></img>
        <div className='map-link'>
        <a href='https://www.google.de/maps/place/London,+Vereinigtes+K%C3%B6nigreich/data=!4m2!3m1!1s0x47d8a00baf21de75:0x52963a5addd52a99?sa=X&ved=2ahUKEwjHk4uMtLr9AhWDi_0HHaDADrsQ8gF6BAgVEAI' target='_blank'>Hier zu Maps</a>
        </div>
        <h3 className='einwohner'>Einwohnerzahl : ~ 2,9 Millionen</h3>
        <h2 className='head-wetter'>Wetterdaten</h2>
        <div className='example-temp'>
            <h3 className='example'>London</h3>
            <h4 className='example-w'>{london}</h4>
            <p className='wind'><i className="fa-solid fa-wind"></i> {wind} km/h</p>
        </div>
        </>
    )
}

export default London;