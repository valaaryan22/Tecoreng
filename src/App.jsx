import Footer from './Footer';
import IndustriesPage from './IndustriesPage';
import NatureImageComponent from './NatureImageComponent';
import Navbar from './Navbar';
import ServicesShowcase from './ServicesShowcase';
function App() {
  return (
    <>
    <div className='bg-[#112542]'>
    <Navbar></Navbar>
      <ServicesShowcase>

      </ServicesShowcase>
      <IndustriesPage></IndustriesPage>

      <NatureImageComponent></NatureImageComponent>
      <Footer/>
    </div>
        
    </>
  );
}

export default App;
