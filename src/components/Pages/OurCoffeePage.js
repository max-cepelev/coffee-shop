import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import AboutSection from '../AboutSection/AboutSection'
import SearchPanel from '../SearchPanel/SearchPanel'
import Footer from '../Footer/Footer'

function OurCoffeePage() {
    return (
        <>
            <Header/>
            <PageTitle title="Our Coffee" imageUrl="/images/ourcoffee.png"/>
            <AboutSection
                imageUrl="/images/aboutour.jpg"
                title="About our beans"
                content="Extremity sweetness difficult behaviour he of. On<br>disposal of as landlord horrible.<br><br>Afraid at highly months do things on at. Situation<br>recommend objection do intention<br>so questions.<br>As greatly removed calling pleased improve an.<br>Last ask him cold feel<br>met spot shy want. Children me laughing we prospect answered followed. At it went<br>is song that held help face."/>
            <SearchPanel/>
            <Footer/>
        </>
    )
}

export default OurCoffeePage;