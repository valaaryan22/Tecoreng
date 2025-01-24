import Appreciation from './Appreciations';
import Footer from './Footer';
import IndustriesPage from './IndustriesPage';
import Navbar from './Navbar';
import ServicesShowcase from './ServicesShowcase';
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
