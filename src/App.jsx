import Appreciation from './component/Appreciations';
import EngagementModels from './component/EngagementModels';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import IndustriesPage from './component/IndustriesPage';
import Insights from './component/Insights';
import Navbar from './component/Navbar';
import ServicesAccordion from './component/ServicesAccordion';
import Specialization from './component/Specialization';
import SuccessStories from './component/SuccessStories';
import VideoPlayer from './component/VideoPlayer';
import WhyChooseUs from './component/WhyChooseUs';
function App() {
  return (
    <>
      <div
        className="bg-[#01132E] w-screen min-h-screen overflow-x-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <Navbar />
        <VideoPlayer />
        <HeroSection />
        <ServicesAccordion />
        <WhyChooseUs />

        <Specialization />
        <EngagementModels />
        <SuccessStories/>
        <IndustriesPage />
        <Appreciation />
        <Insights />
        <Footer />
      </div>
    </>
  );
}

export default App;
  