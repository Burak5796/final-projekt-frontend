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
        <img className='maps' src='https://www.google.de/maps/vt/data=fGtUOB8nXPk1T4bm-bPZKXC237gzVIAO1mHbcOdP3B14-t9H-WnJbZzWJGoa-_zuuDYTLjP1WUkodAJyRbZE5EzNgmnuo4Os0__O0thXTXS82K3TznHFOREFiHyF_hPCDPiOjxLJUfythAI5tiYLvGM-ToRlh8AtJFlOODYuHte87OCPtZJy_z68d1BkxgglJgAmvBRY7v_kn5vF6mfI9YrSv2Utb67teiWrU02jycOKEcVPwf8' alt='rom'></img>
        <p className='einwohner'>Einwohnerzahl: ~ 2,9 Millionen</p>
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