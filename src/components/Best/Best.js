import './Best.scss';
import BestCoffeeCard from '../BestCoffeeCard/BestCoffeeCard';
import coffeeDB from '../../coffeeDB';
function Best() {
    return (
        <section className="best">
            <h2 className="best__title subtitle">Our best</h2>
            <div className="best__list">
                {coffeeDB
                    .filter(item => item.inBest)
                    .map(item => <BestCoffeeCard key={item.id} {...item}/>)
                }
            </div>
        </section>
    )
}

export default Best;