import React, {useEffect, useState} from 'react';
import { Container} from "react-bootstrap";
import classes from "./MobileBannerContent.module.css"
import {Transition} from "react-transition-group";
import CloseToggle from "./CloseToggle/CloseToggle";

const MobileBannerContent = () => {

    const [startAnimate, setStartAnimate] = useState(false)

    useEffect(() => {
        setTimeout(()=>setStartAnimate(prevState => !prevState),500)

    }, [])

    const hideContent = () => {
        setStartAnimate(prevState => !prevState)
    }


    return (
        <Container>
            <Transition
                in={startAnimate}
                timeout={1000}
            >{state => {
                return (
                    <div className={`${classes.wrapper} ${classes[state]}`}>
                        <CloseToggle hideContent ={hideContent} />
                        <ul>
                            <li key={1}>Пол: Мальчик</li>
                            <li key={2}>Расцветка: Шоколад</li>
                            <li key={3}>Размер: Стандарт</li>
                            <li key={4}>Вес: 2.7 кг</li>
                            <li key={5}>Возраст 2.5 года</li>
                            <li key={6}>Документы: Родословная</li>
                        </ul>
                        <p>
                            Бесплатно, на нашей территории. Поможем с продажей щенков.
                        </p>
                    </div>
                )
            }}
            </Transition>
        </Container>
    );

};

export default MobileBannerContent;