import React, {useMemo, useState} from 'react';
import classes from "./Banner.module.css"
import elvis_slide_1 from './images/elvis.jpg'
import elvis_slide_2 from './images/slide_2.png'
import elvis_slide_3 from './images/slide_3.png'
import elvis_mobile from "./images/elvis_mini.png"
import {Transition} from "react-transition-group"


const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(elvis_slide_1);
    const [activeClass, setActiveClass] = useState(null);
    const [startSlide, setStartSlide] = useState(false)


    const style = {
        bg: {
            backgroundImage: `url(${activeSlide})`,
            backgroundSize: 'cover',
            backgroundPositionX: 'center'
        }
    }

    useMemo(() => {
        setTimeout(() => {
            setStartSlide(prevState => !prevState)
        }, 2000)
    }, [activeSlide])


    return (
        <>
            <Transition
                in={startSlide}
                timeout={1000}
                onEnter={() => setActiveClass(classes.sliderHide)}
                onEntering={() => console.log('onEntering')}
                onEntered={() => console.log('onEntered')}
                onExit={() => console.log('onExit')}
                onExiting={() => console.log('onExiting')}
                onExited={() => console.log('onExited')}
            >
                <div style={style.bg} className={`${classes.Banner} ${activeClass}`}>
                    <div style={style.bg} className={`${classes.Banner}`}/>
                    <h1>jsjsjskjsk</h1>
                    <img className={classes.displayNone} src={elvis_mobile} alt={''}/>
                </div>
            </Transition>
        </>

    );

};

export default Banner;