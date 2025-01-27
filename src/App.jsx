
import ContinuousVideo from './component/ContinuousVideo';
import EngagementModels from './component/EngagementModels';
import Footer from './component/Footer';
import IndustriesPage from './component/IndustriesPage';
import Navbar from './component/Navbar';
import OurSpecialization from './component/OurSpecialization';
import ServicesAccordion from './component/ServicesAccordion';
import SuccessStories from './component/SuccessStories';
// import ServicesShowcase from './component/ServicesShowcase';
import WhyChooseUs from './component/WhyChooseUs';
import ClientAppreciation from './component/ClientAppreciation';
import HeroSection from './component/HeroSection';
import OurDevelopmentProcess from './component/OurDevelopmentProcess';
function App() {
  return (
    <>
    <div className='bg-[#01132E]'>
    <Navbar></Navbar>
    <ContinuousVideo/>
      <HeroSection/>
      <ServicesAccordion></ServicesAccordion>
      <WhyChooseUs/>
      <OurSpecialization/>
      <EngagementModels/>
      <OurDevelopmentProcess/>
      <SuccessStories/>
      <IndustriesPage></IndustriesPage>
      <ClientAppreciation/>

      
      <Footer/>
    </div>
        
    </>
  );
}

export default App;
