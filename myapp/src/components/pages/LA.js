import Carousel from 'react-bootstrap/Carousel';
import '../styles/example.css';
import { useState } from 'react';
import Home from '../main-components/Home.js';



const LA = () => {

    const [la,setLA] = useState(" ");
    const [wind,setWind] = useState(" ");

    const fetching = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=los+angeles&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          setLA(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
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
          src="https://griffithobservatory.org/wp-content/uploads/2021/03/cameron-venti-c5GkEd-j5vI-unsplash_noCautionTape.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='rom-head'>Griffith Observatory</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.viaggi-usa.it/wp-content/uploads/2021/06/tcl-chinese-theatre.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='berlin-head'>Chinese Theatre</h3>
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
        <h3 className='einwohner'>Einwohnerzahl : ~ 2,9 Millionen</h3>
        <h2 className='head-wetter'>Wetterdaten</h2>
        <div className='example-temp'>
            <h3 className='example'>London</h3>
            <h4 className='example-w'>{la}</h4>
            <p className='wind'><i className="fa-solid fa-wind"></i> {wind} km/h</p>
        </div>
        </>
    )
}

export default LA;