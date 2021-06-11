import './CardsContainer.scss'
import CoffeeCard from '../CoffeeCard/CoffeCard'

function CardsContainer({array}) {
    return (
        <div className="cards">
            {array.map(item => <CoffeeCard key={item.id} {...item}/>)}
        </div>
    )
}

export default CardsContainer;
