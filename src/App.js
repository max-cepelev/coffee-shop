import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {MainPage, OurCoffeePage, ForYourPleasurePage, CoffeePage} from './components/Pages/'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Route path="/" exact component={MainPage}/>
      <Route path="/our_coffee" exact component={OurCoffeePage}/>
      <Route path="/for_your_pleasure" component={ForYourPleasurePage}/>
      <Route path="/our_coffee/:id" render={
        ({match}) => <CoffeePage id={match.params.id-1}/>}/>
    </Router >
  );
}

export default App;
