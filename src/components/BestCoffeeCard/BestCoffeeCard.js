import './BestCoffeeCard.scss'
import {Link} from 'react-router-dom'

function BestCoffeCard(props) {
    const {id, imageurl, brand, name, price, weight} = props;
    return (
        <Link to={`/our_coffee/${id}`} className="brand">
            <img src={imageurl} alt="brand" className="brand__img"/>
            <h3 className="brand__title text">{`${brand} ${name} ${weight}`}</h3>
            <p className="text brand__price">{`${price}$`}</p>
        </Link>
    )
}

export default BestCoffeCard;