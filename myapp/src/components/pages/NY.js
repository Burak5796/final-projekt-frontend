import Carousel from 'react-bootstrap/Carousel';
import '../styles/example.css';
import { useState } from 'react';
import Home from '../main-components/Home.js';

const NY = () => {

    const [ny,setNy] = useState(" ");
    const [wind,setWind] = useState(" ");

    const fetching = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=new+york&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          setNy(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
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
          src="https://media.timeout.com/images/101705309/image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='rom-head'>Empire State Building</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lovingnewyork.de/wp-content/uploads/2013/04/Central_Park_Vogelperspektive.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='berlin-head'>Central Park</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/09/1200/675/statue-of-liberty-1.jpg?ve=1&tl=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='istanbul-head'>Statue of Liberty</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='la-head'>Times Square</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

        <h3 className='location'>Location</h3>
        <img className='maps' src='https://www.google.de/maps/vt/data=pItNEBubyrf18r-eNgXBe6hUpo_1PaHz3yle0MzXGdnaLrmXJMdHXdwqi2DJY6hrhBrdzMbqmY-OFfLuEBKmEGy2j2eecQXoC8mgUUXzL1VHcMB3nZBgGOu80ERA5ZIv383N8J1oxSNMAgPPMGtVbw7a_5wUEzvwwsUlUmE7xAzqhXbnbFStnafoFUZwvtAyx1gofciXiD3262IPsEdqItpUPQOBe3SBLDQx_U_P7ckjP44KdsQ' alt='ny'></img>
        <div className='map-link'>
        <a href='https://www.google.de/maps/place/New+York+City,+New+York,+USA/data=!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62?sa=X&ved=2ahUKEwjawILgtbr9AhXTIMUKHWuKBXQQ8gF6BAgTEAI' target='_blank'>Hier zu Maps</a>
        </div>
        <p className='einwohner'>Einwohnerzahl: ~ 8,5 Millionen</p>
        <h2 className='head-wetter'>Wetterdaten</h2>
        <div className='example-temp'>
            <h3 className='example'>New York</h3>
            <h4 className='example-w'>{ny}</h4>
            <p className='wind'><i className="fa-solid fa-wind"></i> {wind} km/h</p>
        </div>
        </>
    )
}

export default NY;