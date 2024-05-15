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
function App(){
  return(
    <div>
      {/* <HomePage /> */}


      <HostonMenu />
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
       <Footer />
    
    </div>
  )
}

export default App;
