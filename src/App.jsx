import Appreciation from './component/Appreciations';
import EngagementModels from './component/EngagementModels';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import IndustriesPage from './component/IndustriesPage';
import Navbar from './component/Navbar';
import ServiceCards from './component/ServiceCards';
import ServicesAccordion from './component/ServicesAccordion';
import SuccessStories from './component/SuccessStories';
import VideoPlayer from './component/VideoPlayer';
import WhyChooseUs from './component/WhyChooseUs';
function App() {
  return (
    <>
    <div className='bg-[#01132E]'>
    <Navbar></Navbar>
    <VideoPlayer></VideoPlayer>
    <HeroSection></HeroSection>
    <ServiceCards></ServiceCards>
     <IndustriesPage></IndustriesPage>
      <SuccessStories/>
      <ServicesAccordion></ServicesAccordion>
      <WhyChooseUs/>
      <Appreciation></Appreciation>
      <EngagementModels/>
      <Footer/>
    </div>
        
    </>
  );
}

export default App;
