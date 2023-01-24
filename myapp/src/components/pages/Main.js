import '../styles/main.css';
import { useState } from 'react';



const Main = () => {


    const [resullt,setResult] = useState(" ");

    const [state,setState] = useState({
        description: " "
    });

 


    const fetchWikipedia = () => {
        fetch('https://de.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=' + resullt + '&origin=*')
        .then((response) => response.json())
        .then((data) => setState({description: data.query.pages[Object.keys(data.query.pages)[0]].extract}));
        console.log(state);
    }

    
    return(
        <>
        <div className='head'>
        <h1 className="main-header">Main</h1>
        <input className='searchin' type="text" onChange={(e) => {
            setResult(e.target.value)
        }}></input>
        <button className='searchbtn' onClick={fetchWikipedia}>search</button>
        <p>{state.description}</p>
        </div>
        </>
    )
}

export default Main;