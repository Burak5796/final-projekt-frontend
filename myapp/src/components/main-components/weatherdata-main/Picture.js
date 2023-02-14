import '../../styles/midPics.css';

const Picture = () => {

    return(
        <div className="main-border">
            <div className="brd" id='brd-rom'>
                <img className='brd-pic' src='https://wikitravel.org/upload/shared//thumb/4/44/Colosseum%2C_Rome.JPG/200px-Colosseum%2C_Rome.JPG' alt='Rom'></img>
                <span className='rom-text'>Rom</span>
            </div>
            <div className="brd" id='brd-ny'>
                <img className='brd-pic' src='https://image.newyorkcity.de/wp-content/uploads/2014/05/New-Years-Day-in-New-York-View-from-Top-of-the-Rock-335x252.jpg.webp' alt='NY'></img>
                <span className='ny-text'>New York</span>
            </div>
            <div className="brd" id='brd-la'>
                <img className='brd-pic' src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/Los%20Angeles/griffith-observatory-la.jpg' alt='los angeles'></img>
                <span className='la-text'>Los Angeles</span>
            </div>
            <div className="brd" id='brd-london'>
                <img className='brd-pic' src='https://cdn.pixabay.com/photo/2019/08/24/09/36/london-4427283_960_720.jpg' alt='london'></img>
                <span className='london-text'>London</span>
            </div>
        </div>
    )
}



export default Picture;