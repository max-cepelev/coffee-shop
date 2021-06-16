import './AboutCoffee.scss';
import BlackLine from '../BlackLine/BlackLine';
function AboutCoffee(props) {
    const {imageUrl, name, countryOfOrigin, description, price} = props;
    return (
        <section className='aboutCoffee'>
            <img src={imageUrl} alt={name} className="aboutCoffee__img"/>
            <div className="aboutCoffee__text">
                <h2 className="subtitle">{name}</h2>
                <BlackLine/>
                <div className="aboutCoffee__desc">
                    <p className="text"><span>Country: </span>{countryOfOrigin}</p>
                    <p className="text" dangerouslySetInnerHTML={{__html: "<span>Description: </span>" + description}}></p>
                    <p className="subtitle"><span>Price:</span>{`  ${price}$`}</p>
                </div>
            </div>
        </section>
    )
}

export default AboutCoffee;