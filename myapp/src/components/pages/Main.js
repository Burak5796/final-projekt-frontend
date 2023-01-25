import '../styles/main.css';
import { useState } from 'react';
import Weather from './Weather.js';



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
        <h1 className="main-header">Main</h1>
        <div className='first-column'>
        <img className='flex' src='https://junotice.de/wp-content/uploads/media/2019/rom/rom-kolosseum-1068x712.jpg' alt='Rom'/>
        <img className='flex' src='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_' alt='Paris'/>
        <div className='berlin'>
        <img className='flex' src='https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg' alt='Berlin'/>
        <p className='berlin-text'>Berlin</p>
        </div>
        <img className='flex' src='https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2020/02/1582547228_Istanbul-T%C3%BCrkei.jpg' alt='Istanbul'/>
        <img className='flex' src='#' alt='New York'/>
        <img className='flex' src='#' alt='Los Angeles'/>
        </div>
        <Weather />
        </>
    )
}

export default Main;