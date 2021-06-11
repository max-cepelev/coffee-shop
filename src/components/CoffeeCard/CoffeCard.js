import './CoffeeCard.scss';
import {Link} from 'react-router-dom'

function CoffeeCard(props) {
    const {imageUrl, brand, weight, countryOfOrigin, name, price, id} = props;
    return (
        <Link to={`/our_coffee/${id}`} className="card">
            <img src={imageUrl} alt={name} className="card__img"/>
            <h3 className="card__title text">{`${brand} ${name} ${weight}`}</h3>
            <p className="text card__price">{countryOfOrigin}</p>
            <p className="text card__price">{`${price}$`}</p>
        </Link>
    )
}

export default CoffeeCard;