import '../../styles/midPics.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Picture = ({apiLA,apiUK,apiRom,apiNY}) => {



    return(
        <div className="main-border" >
            <div className="brd" id='brd-rom'>
            <Link to="/rom" target="_blank" rel="noreferrer">
            <img className='brd-pic' src={apiRom} alt='#'></img>
                <span className='rom-text'>Rom</span>
                </Link>
            </div>
            <div className="brd" id='brd-ny'>
                <Link to="/new-york">
                <img className='brd-pic' src={apiNY} alt='#'></img>
                <span className='ny-text'>New York</span>
                </Link>
            </div>
            <div className="brd" id='brd-la'>
               <Link to="/los-angeles">
                <img className='brd-pic' src={apiLA} alt='#'></img>
                <span className='la-text'>Los Angeles</span>
                </Link>
            </div>
            <div className="brd" id='brd-london'>
                <Link to="/london">
                <img className='brd-pic' src={apiUK} alt='#'></img>
                <span className='london-text'>London</span>
                </Link>
            </div>
        </div>
    )
}



export default Picture;