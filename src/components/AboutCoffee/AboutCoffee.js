import { useState, useEffect } from 'react';
import './AboutCoffee.scss';
import BlackLine from '../BlackLine/BlackLine';
function AboutCoffee(props) {
    const {imageurl, name, countryoforigin, description, price} = props;
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(animate);
    }, [animate]);
    return (
        <section className={`aboutCoffee ${animate ? 'hide' : 'view'}`}>
            <img src={imageurl} alt={name} className="aboutCoffee__img"/>
            <div className="aboutCoffee__text">
                <h2 className="subtitle">{name}</h2>
                <BlackLine/>
                <div className="aboutCoffee__desc">
                    <p className="text"><span>Country: </span>{countryoforigin}</p>
                    <p className="text" dangerouslySetInnerHTML={{__html: "<span>Description: </span>" + description}}></p>
                    <p className="subtitle"><span>Price:</span>{`  ${price}$`}</p>
                </div>
            </div>
        </section>
    )
}

export default AboutCoffee;