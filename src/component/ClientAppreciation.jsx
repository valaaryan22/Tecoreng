// Appreciation.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/clientAppreciation.css'
const Appreciation = () => {
  const clientAppreciationData = [
    { id: 1, name: "Client 1", feedback: "Great service! Will recommend to others.", image: "client1.jpg" },
    { id: 2, name: "Client 2", feedback: "Amazing experience, very satisfied.", image: "client2.jpg" },
    { id: 3, name: "Client 3", feedback: "Best platform ever! Loved it.", image: "client3.jpg" },
    { id: 4, name: "Client 4", feedback: "Exceptional quality and support.", image: "client4.jpg" },
    { id: 5, name: "Client 5", feedback: "Highly professional and reliable.", image: "client5.jpg" },
    { id: 6, name: "Client 6", feedback: "Exceeded my expectations in every way.", image: "client6.jpg" },
    // Add more clients as needed
  ];

  return (
    <div className="appreciation-container">
      <h2>Appreciation from Our Clients</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {clientAppreciationData.map(client => (
          <SwiperSlide key={client.id}>
            <div className="appreciation-card">
              <img src={client.image} alt={client.name} />
              <p>{client.feedback}</p>
              <h4>{client.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Appreciation;
