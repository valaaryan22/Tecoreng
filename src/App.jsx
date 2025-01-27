import Appreciation from './component/Appreciations';
import EngagementModels from './component/EngagementModels';
import Footer from './component/Footer';
import IndustriesPage from './component/IndustriesPage';
import Navbar from './component/Navbar';
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
