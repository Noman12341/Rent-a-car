import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ScrollTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import RequiredDocs from './Pages/RequiredDocs';
import CertificatePage from './Pages/CertificatePage';
import ContactPage from './Pages/ContactPage';
import RentCars from './Pages/RentPage';

function App() {
  return <Router>
    <ScrollTop />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/required-docs" exact component={RequiredDocs} />
      <Route path="/certificate" exact component={CertificatePage} />
      <Route path="/rent" exact component={RentCars} />
      <Route path="/contact" exact component={ContactPage} />
    </Switch>
    <Footer />
  </Router>

}
export default App;
