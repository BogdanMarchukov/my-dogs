import React from 'react';
import classes from "./Banner.module.css"
import elvis from './images/elvis.jpg'

const Banner = () => {
    const style = {
        bg: {
            backgroundImage: `url(${elvis})`,
            backgroundSize: 'cover',
            backgroundPositionX: 'center'
        }
    }

    return (
        <div style={style.bg} className={classes.Banner}>

        </div>
    );

};

export default Banner;