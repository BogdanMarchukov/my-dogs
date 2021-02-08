import React, { useState} from 'react';
import classes from "./BannerContent.module.css"
import ToggleSvg from "./ToggleSvg/ToggleSvg";
import {Transition} from "react-transition-group";


const BannerContent = () => {

    const [openList, setOpenList] = useState(false)


    const open = () => {
        setOpenList(prevState => !prevState)

    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.BannerContent}>
                <h1>Вязка <span>"Чихуа-Хуа"</span> В Абинске</h1>
            </div>

            {/*Выпадающий список*/}
            <div className={classes.WrapListToggle}>
                <Transition
                    in={openList}
                    timeout={4000}

                >
                    {state => {
                        return (
                            <div className={`${classes.listToggle} ${classes[state]}`}>
                                <ul>
                                    <li key={1}>Пол: Мальчик</li>
                                    <li key={2}>Расцветка: Шоколад</li>
                                    <li key={3}>Зазмер: Стандарт</li>
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
                <ToggleSvg open={open}/>

            </div>
        </div>
    );

};

export default BannerContent;