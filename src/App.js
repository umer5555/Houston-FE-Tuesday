import logo from './logo.svg';
import './App.css'; 
import HomePage from './HomePage';
import HostonMenu from './HostonMenu';
import Slider from './Slider';
import './mediaqueries.css';
import CarRental from './CarRental';
import HomeServices from './HomeServices';
import HomeCompany from './HomeCompany';
import HomeProfessional from './HomeProfessional';
import HomeAdvantages from './HomeAdvantages';
import HomePricing from './HomePricing';
import HomeTestimonials from './HomeTestimonials';
import BootstrapSLider from './BootstrapSLider';
import HomeAccordian from './HomeAccordian';
import HomeInformation from './HomeInformation';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Fleet from './Fleet';
import Health from './Health';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App(){
  return(
    <div>
      {/* <HomePage /> */}


      {/* <HostonMenu />
      <Slider />
      <CarRental/>
      <HomeServices/>
      <HomeCompany />
      <HomeProfessional />
      <HomeAdvantages />
      <HomePricing/>
      <HomeTestimonials />
       <HomeAccordian />
       <HomeInformation />
       <Footer /> */}
    


    <Router>
                <div  >
                     
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                         <Route path="/umer5555/Houston-FE-Tuesday" element={<Home />} />
                         <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        
                        <Route
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                         <Route
                            path="/services"
                            element={<Services />}
                        ></Route>
                         <Route
                            path="/fleet"
                            element={<Fleet />}
                        ></Route>
                        <Route
                            path="/health"
                            element={<Health />}
                        ></Route>
                    </Routes>
                </div>
            </Router>




    </div>
  )
}

export default App;
