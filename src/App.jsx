import React, { Suspense } from 'react';
import Appreciation from './component/Appreciations';
import ContactForm from './component/ContactForm';
import DevelopmentProcess from './component/DevelopmentProcess';
import EngagementModels from './component/EngagementModels';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import IndustriesPage from './component/IndustriesPage';
import Insights from './component/Insights';
import Navbar from './component/Navbar';
import ServicesAccordion from './component/ServicesAccordion';
import Specialization from './component/Specialization';
import SuccessStories from './component/SuccessStories';
import WhyChooseUs from './component/WhyChooseUs';

// Lazily load VideoPlayer component
const VideoPlayer = React.lazy(() => import('./component/VideoPlayer'));

function App() {
  return (
    <>
      <div
        className="bg-[#01132E] w-screen  overflow-x-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <Navbar />

        {/* Add Suspense with a fallback UI */}
        <Suspense fallback={<div>Loading Video...</div>}>
          <VideoPlayer />
        </Suspense>

        <HeroSection />
        <ServicesAccordion />
        <WhyChooseUs />
        <Specialization />
        <DevelopmentProcess />
        <EngagementModels />
        <SuccessStories />
        <IndustriesPage />
        <Appreciation />
        <Insights />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
