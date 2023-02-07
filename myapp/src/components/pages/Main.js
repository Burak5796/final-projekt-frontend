import { useState } from 'react';
import SearchWeather from './SearchWeather.js';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/main.css';


const Main = () => {


    const [result,setResult] = useState(" ");

    const [state,setState] = useState({
        description: " "
    });



    const [rom,setRom] = useState(" ");
    const [ist,setIst] = useState(" ");
    const [berlin,setBerlin] = useState(" ");
    const [la,setLa] = useState(" ");

   /* const fetchWikipedia = () => {
        fetch('https://de.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=' + result + '&origin=*')
        .then((response) => response.json())
        .then((data) =>  console.log(data) + setState({description: data.query.pages[Object.keys(data.query.pages)[0]].extract}));
        console.log(state);
    }
    */

    const fetching = () => {

      // Temp for Rom

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=rom&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
          setRom(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
      })
      .catch(err => {console.error(err)})


      // Temp for Berlin

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=berlin&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
          setBerlin(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
      })
      .catch(err => {console.error(err)})


      // Temp for Istanbul

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
          setIst(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
      })
      .catch(err => {console.error(err)})



      // Temp for L.A.

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=los+angeles&units=imperial&appid=faf8aef7239ae630b461ea5e265fabb5&lang=de`)
      .then(res => res.json())
      .then(data => {
          setLa(((data.main.temp - 32) * 0.5556).toFixed() + ' °C');
      })
      .catch(err => {console.error(err)})
  }

    
    return(
        <>
        <div className='main-container' onLoad={fetching}>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://junotice.de/wp-content/uploads/media/2019/rom/rom-kolosseum-1068x712.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='rom-head'>Rom</h3>
          <p className='para-city'>{rom}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg"
          alt="Second slide"
          
        />

        <Carousel.Caption>
          <h3 className='berlin-head'>Berlin</h3>
          <p className='para-city'>{berlin}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2020/02/1582547228_Istanbul-T%C3%BCrkei.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='istanbul-head'>Istanbul</h3>
          <p className='para-city'>
            {ist}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475457-Los-Angeles.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='la-head'>Los Angeles</h3>
          <p className='para-city'>{la}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <SearchWeather />
        </div>
        </>
    )
}

export default Main;