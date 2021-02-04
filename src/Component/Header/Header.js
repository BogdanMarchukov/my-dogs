import React, {useState} from 'react';
import classes from './header.module.css'
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import imgDog from './images/barbell_dog_animal_15974.png'



const Header = () => {
    const [menuHeight, setMenuHeight] = useState(0) // открытие/закрытие мобильное меню
    const showMenuToggle = () => {
        if(menuHeight === 0) {
            setMenuHeight(()=> 450)
        }
        else setMenuHeight(() => 0)
    }

    return (
        <header style={{
            height: `${menuHeight}px`

        }} className={classes.header}>
            <Container>
                <Navbar className={classes.headerBlock} expand={'lg'}>
                    <NavbarBrand className={classes.headerBrand} href={'#'}>
                        <img width={'80px'} alt={'LogoDog'} src={imgDog}/>
                        <div className={classes.logoText}>
                            <p>Чихуа-Хуа</p>
                            <span>Элвис</span>
                        </div>
                    </NavbarBrand>
                    <Navbar.Toggle onClick={showMenuToggle} className={classes.toggleNav} aria-controls = "headerNavigations"/>
                    <Navbar.Collapse id="headerNavigations">
                        <Nav className={`mr-auto ml-5 ${classes.headerNavigation}`}>
                            <Nav.Link href={'/'}>Домой</Nav.Link>
                            <Nav.Link href={'/'}>Кто я</Nav.Link>
                            <Nav.Link href={'/'}>Документы</Nav.Link>
                            <Nav.Link href={'/'}>Документы</Nav.Link>
                            <Nav.Link href={'/'}>Документы</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );

};

export default Header;