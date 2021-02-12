import React, {useEffect, useState} from 'react';
import { Container} from "react-bootstrap";
import classes from "./MobileBannerContent.module.css"
import {Transition} from "react-transition-group";
import CloseToggle from "./CloseToggle/CloseToggle";
import OpenToggle from "./OpenToggle/OpenToggle";

const MobileBannerContent = () => {

    const [startAnimate, setStartAnimate] = useState(false)
    const [firstRender, setFirstRender] = useState(false)
    const [activeClass, setActiveClass] = useState(classes.wrapper)

    useEffect(() => {
        setTimeout(()=> {
            setFirstRender(true)
            setStartAnimate(prevState => !prevState)
        },500)

    }, [])

    const hideContent = () => {
        setStartAnimate(prevState => !prevState)
    }

    const openList = () => {
        setStartAnimate(prevState => !prevState)
    }

    const showToggleOpen = () => {
        if (activeClass === classes.wrapper) {
            return false
        }
        else return true
    }



    return (
        <Container>
            <OpenToggle
                open = {showToggleOpen()}
                openList = {openList}
                firstRender = {firstRender}
            />
            <Transition
                in={startAnimate}
                timeout={1000}
                unmountOnExit={true}
                onEntering={() => {
                    if (activeClass === classes.wrapper) {
                        setActiveClass(`${classes.wrapper} ${classes.showList}`)
                    }
                }}
                onExit={()=> {
                    if(activeClass === `${classes.wrapper} ${classes.showList}`) {
                        setActiveClass(classes.wrapperOpen)
                    }
                }}
                onExiting={() => {
                    if(activeClass === classes.wrapperOpen) {
                        setActiveClass(`${classes.wrapperOpen} ${classes.hideList}`)
                    }
                }}
                onExited={()=> {
                    if(activeClass === `${classes.wrapperOpen} ${classes.hideList}`) {
                        setActiveClass(classes.wrapper)
                    }
                }}
            >{state => {
                return (

                    <div className={activeClass}>
                        <CloseToggle
                            hideContent ={hideContent}
                            visible = {state}
                        />
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