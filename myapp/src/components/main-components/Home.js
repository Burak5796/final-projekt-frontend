import '../styles/home.css'
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <>
        <div className='home-container'>
        <a href='http://localhost:3000' className="home">zur Homepage</a>
        </div>
        <h1 className='headline'>TWP Travel Weather App</h1>
        </>
    )
}

export default Home;