import React from 'react'
// import "../App.css"
import './Hero.css'
import {Button} from "./Button"


const Hero = () => {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay muted loop></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Start
                </Button>
                <Button 
                className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER
                    <i class="fas fa-play-circle"></i>
                </Button>
                
            </div>
        </div>
    )
}

export default Hero
