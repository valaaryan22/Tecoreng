import Appreciation from './component/Appreciations';
import EngagementModels from './component/EngagementModels';
import Footer from './component/Footer';
import IndustriesPage from './component/IndustriesPage';
import Navbar from './component/Navbar';
import ServicesAccordion from './component/ServicesAccordion';
// import ServicesShowcase from './component/ServicesShowcase';
import WhyChooseUs from './component/WhyChooseUs';
function App() {
  return (
    <>
    <div className='bg-[#01132E]'>
    <Navbar></Navbar>
      {/* <ServicesShowcase> */}

      {/* </ServicesShowcase> */}
      <IndustriesPage></IndustriesPage>
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
