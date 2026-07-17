import React from 'react'
import './navbar.css'
import './components.css'

const About = () => {
  return (
    <div id='about'>
      <h2 className='text-center'>About Darshan Booking System</h2>
      <p className='text-center' style={{ fontSize: "18px", marginBottom: "30px" }}>
        A Modern Solution for Temple Management and Devotee Experience
      </p>
      
      <ol style={{ maxWidth: "900px", margin: "0 auto" }}>
        <li>
          <strong>Temple Queue Management</strong> - All major temples across India are implementing the Darshan Token, E-Queue, and Ticket Booking system to efficiently manage the rush of devotees.
        </li>
        <li>
          <strong>Safety and Social Distancing</strong> - Ensures social distancing, crowd management, and contact tracing with minimum physical interaction and touchless entry.
        </li>
        <li>
          <strong>Online Advance Booking</strong> - For devotees with internet access who are coming from far-off places, enabling them to plan their journey in advance.
        </li>
        <li>
          <strong>On-the-Spot Token Issuance</strong> - For local devotees without internet knowledge, on-site darshan token issuance interface is available.
        </li>
        <li>
          <strong>Developed with Expert Consultation</strong> - Our system has been developed after thorough research and consultation with major temples across India.
        </li>
        <li>
          <strong>Comprehensive Reporting</strong> - Daily reports for gatekeepers and security personnel, plus periodic reports for management to review usage and details.
        </li>
        <li>
          <strong>Seamless Experience</strong> - Easy integration of on-the-spot token issuance with online booking system for a unified experience.
        </li>
        <li>
          <strong>Real-time Capacity Management</strong> - Monitor temple capacity in real-time and manage devotee flow efficiently throughout the day.
        </li>
      </ol>
    </div>
  )
}

export default About