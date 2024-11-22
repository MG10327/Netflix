import React from 'react'
import "./Home.scss"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'
import { useRef } from 'react'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
            <img src={hero_banner} alt="hero banner" className='banner-img' />
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p>Discovering his ties to a secret ancient order, a young man liging in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                <div className="hero-btns">
                    <button className='btn'><img src={play_icon} alt="Play" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="More info" />More</button>
                </div>

                <TitleCards />
            </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} />
          <TitleCards title={"Only on Netflix"} />
          <TitleCards title={"Upcoming"} />
          <TitleCards title={"Top Picks For You"} />
        </div>
    </div>
  )
}

export default Home