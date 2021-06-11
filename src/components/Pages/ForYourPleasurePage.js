import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import AboutSection from '../AboutSection/AboutSection'
import coffeeDB from '../../coffeeDB'
import CardsContainer from '../CardsContainer/CardsContainer'
import Footer from '../Footer/Footer'

function ForYourPleasurePage() {
    return (
        <>
            <Header/>
            <PageTitle title="For your pleasure" imageUrl="/images/ForYourPleasurePage.png"/>
            <AboutSection
                imageUrl="/images/aboutourgoods.png"
                title="About our goods"
                content="Extremity sweetness difficult behaviour he of. On<br>disposal of as landlord horrible.<br><br>Afraid at highly months do things on at. Situation<br>recommend objection do intention<br>so questions.<br>As greatly removed calling pleased improve an.<br>Last ask him cold feel<br>met spot shy want. Children me laughing we prospect answered followed. At it went<br>is song that held help face."
            />
            <CardsContainer array={coffeeDB}/>
            <Footer/>
        </>
    )
}

export default ForYourPleasurePage;