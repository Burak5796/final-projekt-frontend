import { useState } from 'react';
import SearchWeather from '../main-components/SearchWeather.js';
import Picture from '../main-components/weatherdata-main/Picture.js';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/main.css';
import { Link } from 'react-router-dom';


const La = 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/Los%20Angeles/griffith-observatory-la.jpg';
const Uk = 'https://cdn.pixabay.com/photo/2019/08/24/09/36/london-4427283_960_720.jpg';
const Ny = 'https://image.newyorkcity.de/wp-content/uploads/2014/05/New-Years-Day-in-New-York-View-from-Top-of-the-Rock-335x252.jpg.webp';
const Rom = 'https://wikitravel.org/upload/shared//thumb/4/44/Colosseum%2C_Rome.JPG/200px-Colosseum%2C_Rome.JPG';

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
         <h1 className='headline'>TWP Travel Weather App</h1>
        <h3 className="head-input">Um Wetterdaten aus einer beliebigen Stadt zu erhalten nutze unsere Suchfunktion</h3>
        <SearchWeather />
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
    <Picture apiUK={Uk} apiLA={La} apiNY={Ny} apiRom={Rom}/>
        </div>
        <div className="details-container">
        <h4 className="details-head">Für eine detaillierte Suche für deine Stadt klicke hier</h4>
        <Link to='/details'>
        <button className="details-btn">Click !</button>
        </Link>
        </div>
        </>
    )
}

export default Main;