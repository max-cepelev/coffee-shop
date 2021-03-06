import './Title.scss';
import img from './coffee.svg';
import { Link } from "react-scroll";
function Title() {
    return (
        <section className='main'>
            <h1 className='title'>Everything You Love About Coffee</h1>
            <div className='main__img'>
                <span></span>
                <img src={img} alt="coffee"/>
                <span></span>
            </div>
            <h2 className="subtitle subtitle-white">We makes every day full of energy and taste</h2>
            <h2 className="subtitle subtitle-white">Want to try our beans?</h2>
            <Link 
                to="about" 
                className="main__link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={800}>More</Link>
        </section>
    )
}

export default Title;