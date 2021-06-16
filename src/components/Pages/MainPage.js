import Header from '../Header/Header'
import Title from '../Title/Title'
import AboutUs from '../AboutUs/AboutUs'
import Best from '../Best/Best'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';

import "./page.scss"

function MainPage() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className={`page ${animate ? '' : 'hide'}`}>
            <Header/>
            <Title/>
            <AboutUs/>
            <Best/>
            <Footer/>
        </div>
    )
}

export default MainPage;