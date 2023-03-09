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
          src="https://www.universalstudioshollywood.com/tridiondata/ush/en/us/files/images/ush-universal-studios-hollywood-red-carpet-arch-b.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='istanbul-head'>Universal Studios</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.timeout.com/images/105395982/image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='la-head'>Santa Monica Pier</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <h3 className='location'>Location</h3>
        <img className='maps' src='https://www.google.de/maps/vt/data=rinOqa9hlqR43bxiAtDGGyt2rqgFzNAmMdcZaBufLG2WVKLHaNAABwzp26N52caJnjjFD-2hZ3oMUr2s5ULtlRJsZLlp9g2_0-qUILJ_oLCk9hszbIkEMd_XO20kJ6WbqdOc7_Z1i6wTx2ADrpC77l32k1bfGES-H5hTFALDA4Zui2PW1oRzb40sVYotWGpWEqwUSjkBR-ClofTDFco89PISpaZBrHc_zSlV8IFRYTqhmHK4t8o' alt='la'></img>
        <h3 className='einwohner'>Einwohnerzahl : ~ 2,9 Millionen</h3>
        <h2 className='head-wetter'>Wetterdaten</h2>
        <div className='example-temp'>
            <h3 className='example'>Los Angeles</h3>
            <h4 className='example-w'>{la}</h4>
            <p className='wind'><i className="fa-solid fa-wind"></i> {wind} km/h</p>
        </div>
        </>
    )
}

export default LA;