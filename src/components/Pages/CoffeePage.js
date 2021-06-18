import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import getData from '../../services/getData'
import Spinner from '../Spinner/Spinner'
import AboutCoffe from '../AboutCoffee/AboutCoffee'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';

import "./page.scss"

function CoffeePage({id}) {
    const [loading, setloading] = useState(true);
    const [coffeeDB, setCoffeeDB] = useState([]);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [animate]);
    useEffect(() => {
        setloading(true)
        if (coffeeDB.length === 0) {
            getData()
                .then(data => {
                    setCoffeeDB(data)
                })
        } else {
            setloading(false)
        }
    }, [coffeeDB])
    return (
        <div className={`page ${animate ? '' : 'hide'}`}>
            <Header/>
            <PageTitle title="Our Coffee" imageUrl="/images/ourcoffee.png"/>
            {loading ? <Spinner/> : <AboutCoffe {...coffeeDB[id]}/>}
            <Footer/>
        </div>
    )
}

export default CoffeePage;