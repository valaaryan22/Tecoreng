import Appreciation from './component/Appreciations';
import Footer from './component/Footer';
import IndustriesPage from './component/IndustriesPage';
import Navbar from './component/Navbar';
import ServicesAccordion from './component/ServicesAccordion';
import ServicesShowcase from './component/ServicesShowcase';
function App() {
  return (
    <>
    <div className='bg-[#0b1b33]'>
    <Navbar></Navbar>
      <ServicesShowcase>

      </ServicesShowcase>
      <IndustriesPage></IndustriesPage>

      <Appreciation></Appreciation>
      
      <Footer/>
    </div>
        
    </>
  );
}

export default App;
