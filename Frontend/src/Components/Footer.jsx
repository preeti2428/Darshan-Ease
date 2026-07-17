import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id='contact'>
            <div style={{ 
                backgroundColor: '#2d3436', 
                padding: '50px 40px',
                color: 'white'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* Contact Section */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        marginBottom: '40px'
                    }}>
                        {/* About */}
                        <div>
                            <h3 style={{ color: '#fdcb6e', marginBottom: '15px', fontWeight: '700' }}>
                                About DarshanEase
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                                Embark on a Spiritual Journey, One Darshan at a Time – Seamless Temple Darshan Ticket Booking at Your Fingertips!
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 style={{ color: '#fdcb6e', marginBottom: '15px', fontWeight: '700' }}>
                                Quick Links
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="#home" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} 
                                       onMouseEnter={(e) => e.target.style.color = '#fdcb6e'}
                                       onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                                        Home
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="#temples" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                                       onMouseEnter={(e) => e.target.style.color = '#fdcb6e'}
                                       onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                                        Temples
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="#about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                                       onMouseEnter={(e) => e.target.style.color = '#fdcb6e'}
                                       onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                                        About
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="#services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                                       onMouseEnter={(e) => e.target.style.color = '#fdcb6e'}
                                       onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 style={{ color: '#fdcb6e', marginBottom: '15px', fontWeight: '700' }}>
                                Contact Us
                            </h3>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                <FaPhone style={{ marginRight: '10px', color: '#fdcb6e' }} />
                                <a href="tel:1278655867" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                                    127-865-586-67
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                <FaEnvelope style={{ marginRight: '10px', color: '#fdcb6e' }} />
                                <a href="mailto:support@darshanease.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                                    support@darshanease.com
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaMapMarkerAlt style={{ marginRight: '10px', color: '#fdcb6e' }} />
                                <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                                    India
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '30px',
                        marginBottom: '30px',
                        textAlign: 'center'
                    }}>
                        <h4 style={{ color: '#fdcb6e', marginBottom: '15px' }}>Follow Us</h4>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <a href="#facebook" style={{ 
                                color: 'rgba(255,255,255,0.7)', 
                                fontSize: '1.5rem',
                                transition: 'color 0.3s'
                            }}
                               onMouseEnter={(e) => e.currentTarget.style.color = '#fdcb6e'}
                               onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                <FaFacebook />
                            </a>
                            <a href="#twitter" style={{ 
                                color: 'rgba(255,255,255,0.7)', 
                                fontSize: '1.5rem',
                                transition: 'color 0.3s'
                            }}
                               onMouseEnter={(e) => e.currentTarget.style.color = '#fdcb6e'}
                               onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                <FaTwitter />
                            </a>
                            <a href="#instagram" style={{ 
                                color: 'rgba(255,255,255,0.7)', 
                                fontSize: '1.5rem',
                                transition: 'color 0.3s'
                            }}
                               onMouseEnter={(e) => e.currentTarget.style.color = '#fdcb6e'}
                               onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '20px',
                        textAlign: 'center',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.9rem'
                    }}>
                        <p style={{ margin: '0 0 8px 0' }}>
                            Copyright © {currentYear} <span style={{ color: '#fdcb6e', fontWeight: '700' }}>DarshanEase</span>. All Rights Reserved.
                        </p>
                        <p style={{ margin: 0 }}>
                            <a href="#privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginRight: '20px' }}>Privacy Policy</a>
                            <a href="#terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer