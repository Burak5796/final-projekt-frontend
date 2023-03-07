import '../styles/home.css'
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <>
        <button className='home'>
        <Link to='/'>
        zur Homepage
        </Link>
        </button>
        <h1 className='headline'>TWP Travel Weather App</h1>
        </>
    )
}

export default Home;