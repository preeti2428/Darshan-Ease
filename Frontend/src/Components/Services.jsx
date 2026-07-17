// Services.js

import React from 'react';
import './navbar.css';
import './components.css';

const Services = () => {
  return (
    <div className='services-container' id='services'>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Our Services</h1>

      <div className='service'>
        <h2>Darshan Timings</h2>
        <p>
          Explore the divine experience with our regular darshan timings. Witness the spiritual
          aura and seek blessings from the divine deities. We provide multiple time slots to accommodate
          all devotees throughout the day.
        </p>
      </div>

      <div className='service'>
        <h2>Special Pooja Services</h2>
        <p>
          Elevate your spiritual journey with our special pooja services. Immerse yourself in the
          sacred rituals and receive blessings from the revered priests. Customize your pooja with our experienced temple staff.
        </p>
      </div>

      <div className='service'>
        <h2>Online Ticket Booking</h2>
        <p>
          Conveniently book your darshan tickets online. Save time and ensure a seamless entry to
          the temple premises. Our user-friendly platform makes booking quick and easy.
        </p>
      </div>

      <div className='service'>
        <h2>Customer Service</h2>
        <p>
          Tailor your spiritual experience with our custom services. Personalize your visit to meet
          your unique spiritual needs. Our dedicated support team is always ready to assist you.
        </p>
      </div>

      <div className='service'>
        <h2>VIP Darshan Pass</h2>
        <p>
          Get priority access to the temple with our exclusive VIP Darshan Pass. Skip long queues
          and enjoy a premium darshan experience with dedicated assistance.
        </p>
      </div>

      <div className='service'>
        <h2>Group Bookings</h2>
        <p>
          Perfect for families, friends, and organizations. Get special rates for group bookings
          and coordinated entry times. Contact us for customized group packages.
        </p>
      </div>
    </div>
  );
};

export default Services;
