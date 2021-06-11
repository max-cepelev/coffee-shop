import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import coffeeDB from '../../coffeeDB'
import AboutCoffe from '../AboutCoffee/AboutCoffee'
import Footer from '../Footer/Footer'

function CoffeePage({id}) {
    return (
        <>
            <Header/>
            <PageTitle title="Our Coffee" imageUrl="/images/ourcoffee.png"/>
            <AboutCoffe {...coffeeDB[id]}/>
            <Footer/>
        </>
    )
}

export default CoffeePage;