import React from 'react';
import classes from "./Layout.module.css"
import bg_main from './images/bg_main.jpg'
import Header from "../Component/Header/Header";


const Layout = ({children}) => {
    const styles = {
        bgMain: {
            backgroundImage: `url(${bg_main})`
        }
    };
    return (
        <>
            <Header/>
            <main
                className={classes.LayoutMain}
                style={styles.bgMain}
            >
                {children}
            </main>
        </>

    );

};

export default Layout;