import { useState, useEffect } from 'react';
import './Best.scss';
import Spinner from '../Spinner/Spinner';
import BestCoffeeCard from '../BestCoffeeCard/BestCoffeeCard';
import getData from '../../services/getData'
function Best() {
    const [coffeeDB, setCoffeeDB] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        if (coffeeDB.length === 0) {
            setloading(true)
            getData()
                .then(data => {
                    setCoffeeDB(data)
                })
        } else {
            setloading(false)
        }
    }, [coffeeDB])


    return (
        <section className="best">
            <h2 className="best__title subtitle">Our best</h2>
            <div className="best__list">
                {loading ? <Spinner/> : coffeeDB
                    .filter(item => item.inbest === "1")
                    .map(item => <BestCoffeeCard key={item.id} {...item}/>)
                }
            </div>
        </section>
    )
}

export default Best;