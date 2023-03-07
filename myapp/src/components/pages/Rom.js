import Carousel from 'react-bootstrap/Carousel';
import '../styles/example.css';
import { useState } from 'react';
import Home from '../main-components/Home.js';


const Rom = () => {

    const [rom,setRom] = useState(" ");
    const [wind,setWind] = useState(" ");

    const fetching = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=rom&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          setRom(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
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
          src="https://junotice.de/wp-content/uploads/media/2019/rom/rom-kolosseum-1068x712.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='rom-head'>Kolosseum</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tourscanner.com/blog/wp-content/uploads/2018/09/Vatican-museum-tours.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='berlin-head'>St. Peter's Basilica</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.alex-reisen.de/wp-content/uploads/2014/08/Pantheon-in-Rom.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='istanbul-head'>Pantheon</h3>
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

        <h3 className='location'>Location:</h3>
        <img className='maps' src='https://www.google.de/maps/vt/data=fGtUOB8nXPk1T4bm-bPZKXC237gzVIAO1mHbcOdP3B14-t9H-WnJbZzWJGoa-_zuuDYTLjP1WUkodAJyRbZE5EzNgmnuo4Os0__O0thXTXS82K3TznHFOREFiHyF_hPCDPiOjxLJUfythAI5tiYLvGM-ToRlh8AtJFlOODYuHte87OCPtZJy_z68d1BkxgglJgAmvBRY7v_kn5vF6mfI9YrSv2Utb67teiWrU02jycOKEcVPwf8' alt='rom'></img>
        <div className='map-link'>
        <a href='https://www.google.de/maps/place/Rom,+Italien/data=!4m2!3m1!1s0x132f6196f9928ebb:0xb90f770693656e38?sa=X&ved=2ahUKEwi738mqtrr9AhUUhf0HHa2wCtgQ8gF6BAgNEAI' target='_blank'>Hier zu Maps</a>
        </div>
        <h3 className='einwohner'>Einwohnerzahl : ~ 2,9 Millionen</h3>
        <h2 className='head-wetter'>Wetterdaten</h2>
        <div className='example-temp'>
            <h3 className='example'>Rom</h3>
            <h4 className='example-w'>{rom}</h4>
            <p className='wind'><i className="fa-solid fa-wind"></i> {wind} km/h</p>
        </div>
        </>
    )
}

export default Rom;