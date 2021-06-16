import React, {useState} from 'react'
import './SearchPanel.scss'
import Fuse from "fuse.js"
import coffeeDB from '../../coffeeDB'
import CardsContainer from '../CardsContainer/CardsContainer'

function SearchPanel() {

    const [coffeeList, setCoffeeList] = useState(coffeeDB);

    const searchData = (pattern, keys) => {
        if (!pattern) {
            setCoffeeList(coffeeDB);
            return;
        }
    
        const fuse = new Fuse(coffeeList, {
            keys: keys,
        });
    
        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setCoffeeList([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            setCoffeeList(matches);
        }
    };

    // search by country
    const onClickSearch = (value) => {
        setCoffeeList(()=> {
            return coffeeDB.filter((item) => item.countryOfOrigin.indexOf(value) !== -1)
        })
    }

    return (
        <section className="search">
            <div className="search__panel">
                <div className="search__item">
                    <p className="text">Lookiing for</p>
                    <input
                        type="text"
                        className="search__input"
                        placeholder="start typing here..."
                        onChange={(e) => searchData(e.target.value, ["brand", "name"])}/>
                </div>
                <div className="search__item">
                    <p className="text">Or filter</p>
                        <div className="search__buttons">
                        <button onClick={() => onClickSearch("Brazil")} className="search__button text">Brazil</button>
                        <button onClick={() => onClickSearch("Kenya")} className="search__button text">Kenya</button>
                        <button onClick={() => onClickSearch("Colombia")} className="search__button text">Colombia</button>
                    </div>
                </div>
            </div>
            <CardsContainer array={coffeeList}/>
        </section>
    )
}

export default SearchPanel;