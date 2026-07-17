import React, { useState, useEffect } from 'react'
import './navbar.css'
import './components.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const TempleCard = ({ imageSrc, title, description }) => {

    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };
  
    return (
      <Card 
        className="temple-card"
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
      >
        {isHovered ? (
          <Card.Body style={{ padding: '20px' }}>
            <Card.Text style={{ color: '#636e72', lineHeight: '1.8' }}>
              <strong style={{ color: '#d63031', fontSize: '1.1rem' }}>
                Advance Darshan Booking
              </strong>
              <br />
              <br />
              <strong style={{ fontSize: '1.1rem', color: '#2d3436' }}>
                {title}
              </strong>
              <br />
              <br />
              <p style={{ margin: '0', color: '#636e72' }}>
                {description}
              </p>
            </Card.Text>
          </Card.Body>
        ) : (
          <div>
            <Card.Img 
              className="temple-card-image"
              variant="top" 
              src={imageSrc} 
              alt={title}
            />
          </div>
        )}
      </Card>
    );
};

const Temples = () => {

  return (
  
    <div className='temples-section' id='temples'>   
  
      <h1 className='text-center'>Featured Temples</h1>
      <p className='text-center' style={{color: '#636e72', fontSize: '1.1rem', marginBottom: '30px'}}>
        Book your darshan at these magnificent temples across India
      </p>
      
      <Link to='/ulogin' style={{ textDecoration: "none" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          padding: "0 20px"
        }}>
          <TempleCard 
            imageSrc="https://d3k1i85mml78tf.cloudfront.net/Blogs/1677258515580_post_image_1.jpg" 
            title="Shri Thakur Banke Bihari Ji Mandir"
            description="Register for Shri Thakur Banke Bihari Ji Mandir Online Darshan Booking with advance slots available"
            linkTo="/ulogin"
          />
          <TempleCard
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Shiv_khori_2.jpg/1200px-Shiv_khori_2.jpg"
            title="Shiv Khori Mandir"
            description="Register for Shiv Khori Mandir Online Darshan Booking with flexible timing options"
          />
          <TempleCard
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg"
            title="Tirupati Tirumala Temple"
            description="Register for Tirupati Tirumala Temple Online Darshan Booking with VIP services available"
          />
        </div>
      </Link>
      
      <br /> 
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        padding: "0 20px"
      }}>
        <TempleCard 
          imageSrc="https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?height=459&width=711&fit=bounds" 
          title="Padmanabaswamy Temple"
          description="Register for Padmanabaswamy Temple Online Darshan Booking with special darshan timings"
        />
        <TempleCard
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/e4/Sai_baba_samadhi_mandir_.jpg"
          title="Shirdi Sai Baba Mandir"
          description="Register for Shirdi Sai Baba Mandir Online Darshan Booking with spiritual guidance services"
        />
        <TempleCard
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg"
          title="Golden Temple"
          description="Register for Golden Temple Online Darshan Booking with langar and meditation services"
        />
      </div>
    </div>
  )
}

export default Temples


