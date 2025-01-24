import Appreciation from './component/Appreciations';
import Footer from './component/Footer';
import IndustriesPage from './component/IndustriesPage';
import Navbar from './component/Navbar';
import ServicesAccordion from './component/ServicesAccordion';
import ServicesShowcase from './component/ServicesShowcase';
function App() {
  return (
    <>
    <div className='bg-[#01132E]'>
    <Navbar></Navbar>
      <ServicesShowcase>

      </ServicesShowcase>
      <IndustriesPage></IndustriesPage>
      <ServicesAccordion></ServicesAccordion>
      <Appreciation></Appreciation>
      
      <Footer/>
    </div>
        
    </>
  );
}

export default App;
