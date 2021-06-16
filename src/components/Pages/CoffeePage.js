import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import coffeeDB from '../../coffeeDB'
import AboutCoffe from '../AboutCoffee/AboutCoffee'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';

import "./page.scss"

function CoffeePage({id}) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className={`page ${animate ? '' : 'hide'}`}>
            <Header/>
            <PageTitle title="Our Coffee" imageUrl="/images/ourcoffee.png"/>
            <AboutCoffe {...coffeeDB[id]}/>
            <Footer/>
        </div>
    )
}

export default CoffeePage;