import { useState } from 'react';
import SearchWeather from './SearchWeather.js';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/main.css';


const Main = () => {


    const [result,setResult] = useState(" ");

    const [state,setState] = useState({
        description: " "
    });

 


    const fetchWikipedia = () => {
        fetch('https://de.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=' + result + '&origin=*')
        .then((response) => response.json())
        .then((data) =>  console.log(data) + setState({description: data.query.pages[Object.keys(data.query.pages)[0]].extract}));
        console.log(state);
    }

    
    return(
        <>
        <h1 className='main-header'>Test</h1>
        <div className='main-container'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://junotice.de/wp-content/uploads/media/2019/rom/rom-kolosseum-1068x712.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Rom</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Berlin</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2020/02/1582547228_Istanbul-T%C3%BCrkei.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Istanbul</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>New York</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <SearchWeather />
        </div>
        </>
    )
}

export default Main;