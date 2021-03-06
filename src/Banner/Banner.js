import React from 'react';
import classes from "./Banner.module.css"
import elvis_mobile from "./images/elvis_mini.png"
import {Container} from "react-bootstrap";
import BannerContent from "./BannerContent/BannerContent";
import Slider from "./Slider/Slider";
import MobileBannerContent from "./MobileBannerContent/MobileBannerContent";


const Banner = () => {


    return (
        <>
            <div className={classes.wrapper}>
                {/*контент Desktop*/}
                <div className={classes.contentBlock}>
                    <Container className={classes.containerContentMobile}>
                        <BannerContent/>
                    </Container>
                </div>

                {/*// слайды*/}
                <Slider/>

                {/*Мобильный контент*/}
                <MobileBannerContent/>
                <img className={classes.displayNone_mobile} src={elvis_mobile} alt={''}/>

            </div>

        </>

    );

};

export default Banner;