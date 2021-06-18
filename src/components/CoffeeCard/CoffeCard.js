import './CoffeeCard.scss';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function CoffeeCard(props) {
    const [animate, setAnimate] = useState(false);
    const {imageurl, brand, weight, countryoforigin, name, price, id} = props;
    useEffect(() => {
        setAnimate(true);
    }, [animate])
    return (
        <Link to={`/our_coffee/${id}`} className={`card ${animate ? 'active' : ''}`}>
            <img src={imageurl} alt={name} className="card__img"/>
            <h3 className="card__title text">{`${brand} ${name} ${weight}`}</h3>
            <p className="text card__price">{countryoforigin}</p>
            <p className="text card__price">{`${price}$`}</p>
        </Link>
    )
}

export default CoffeeCard;