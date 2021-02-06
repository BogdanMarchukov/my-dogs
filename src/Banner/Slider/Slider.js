import React, {useEffect, useState} from 'react';
import classes from "../Banner.module.css"
import elvis_slide_1 from "../images/elvis.jpg";
import elvis_slide_2 from "../images/slide_2.png";
import elvis_slide_3 from "../images/slide_3.png";
import {Transition} from "react-transition-group";

const Slider = () => {
    const [slideClass_1, setSlideClass_1] = useState(classes.imageSlade_1);
    const [slideClass_2, setSlideClass_2] = useState(classes.displayNone);
    const [slideClass_3, setSlideClass_3] = useState(classes.displayNone);

    const [startSlide, setStartSlide] = useState(false);


    const NextSlide = () => {
        if (slideClass_1 === classes.imageSlade_1) {
            setSlideClass_1(`${classes.imageSlade_1} ${classes.sliderHide}`)
            setSlideClass_2(`${classes.imageSlade_2} ${classes.sliderShow}`)
        }
        if (slideClass_1 === `${classes.imageSlade_1} ${classes.sliderHide}`) {
            setSlideClass_1(classes.displayNone)
            setSlideClass_2(classes.imageSlade_2)
            return true
        }

        if (slideClass_2 === classes.imageSlade_2) {
            setSlideClass_2(`${classes.imageSlade_2} ${classes.sliderHide}`)
            setSlideClass_3(`${classes.imageSlade_3} ${classes.sliderShow}`)
        }
        if (slideClass_2 === `${classes.imageSlade_2} ${classes.sliderHide}`) {
            setSlideClass_2(classes.displayNone)
            setSlideClass_3(classes.imageSlade_3)
            return true
        }

        if (slideClass_3 === classes.imageSlade_3) {
            setSlideClass_3(`${classes.imageSlade_3} ${classes.sliderHide}`)
            setSlideClass_1(`${classes.imageSlade_1} ${classes.sliderShow}`)
        }
        if (slideClass_3 === `${classes.imageSlade_3} ${classes.sliderHide}`) {
            setSlideClass_3(classes.displayNone)
            setSlideClass_1(classes.imageSlade_1)
            return true
        }
    }


    useEffect(() => {
        setTimeout(() => {
            setStartSlide(prevState => !prevState)
        }, 5000)
    }, [startSlide])

    return (
        <Transition
            in={startSlide}
            timeout={0}

            onEnter={() => NextSlide()}
            onExit={() => NextSlide()}

        >
            <div className={classes.sliderBlock}>
                <img src={elvis_slide_1} className={slideClass_1} alt={''}/>
                <img src={elvis_slide_2} className={slideClass_2} alt={''}/>
                <img src={elvis_slide_3} className={slideClass_3} alt={''}/>
            </div>
        </Transition>
    );

};

export default Slider;