import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom'
import './Home.css'
import IMG1 from "./league-of-legends-teemo.jpg"
import IMG2 from "./League-of-Legends-lol-roles.jpg"
import IMG3 from "./1200x675.jpg"


const Home = () => {
    return (
        
    <div className='body'>
        
        <div class="Slider">
        <p className='tytul'>League of Legends Players Stats</p>
        <AliceCarousel autoPlay autoPlayInterval="2500" infinite disableButtonsControls>
        <img src={IMG1} className="sliderimg" className='bobo'/>
        <img src={IMG2} className="sliderimg" className='bobo'/>
        <img src={IMG3} className="sliderimg" className='bobo'/>
        </AliceCarousel> 
        </div>

    </div>   
        
    );
}

export default Home
