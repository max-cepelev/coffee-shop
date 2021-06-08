import './BlackLine.scss';
import img from './coffee_black.svg';
function BlackLine() {
    return (
        <div className='line'>
            <span></span>
            <img src={img} alt="coffee"/>
            <span></span>
        </div>
    )
}

export default BlackLine;