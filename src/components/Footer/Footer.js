import './Footer.scss';
import Navigation from '../Navigation/Navigation';
import BlackLine from '../BlackLine/BlackLine';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <Navigation color="black"/>
                <span></span>
                <BlackLine/>
            </div>
        </footer>
    )
}

export default Footer;