import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components.css';

const Banner = () => {

    const settings = {
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots'
    };

    const bannerStyle = {
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        marginLeft: '20px',
        marginRight: '20px',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.15)'
    };

    const imageStyle = {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        display: 'block'
    };

    const marqueStyle = {
        background: 'linear-gradient(90deg, #fdcb6e, #ffc93c)',
        padding: '15px 20px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: '600',
        color: '#d63031',
        marginTop: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    };

    return (
        <div style={{ marginTop: "10px" }}>
            <div style={bannerStyle}>
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://www.oyorooms.com/blog/wp-content/uploads/2017/10/Feature-Image-min-2-1.jpg"
                            alt="First slide"
                            style={imageStyle}
                        />
                    </div>
                    <div>
                        <img
                            src="https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2022/07/20122054/Indian-Temple-Architecture-With-The-Most-Amazing-Stories.jpg"
                            alt="Second slide"
                            style={imageStyle}
                        />
                    </div>
                    <div>
                        <img
                            src="https://blogs.revv.co.in/blogs/wp-content/uploads/2020/11/Somnath-Temple.jpg"
                            alt="Third slide"
                            style={imageStyle}
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.veenaworld.com/wp-content/uploads/2021/02/10-Famous-South-Indian-Temples-You-Should-Not-Miss.jpg"
                            alt="Fourth slide"
                            style={imageStyle}
                        />
                    </div>
                </Slider>
            </div>
            <div style={marqueStyle}>
                <p style={{ margin: 0 }}>
                    ✨ Book your tickets for Temple Darshan now! Limited slots available. Don't miss the divine experience. ✨
                </p>
            </div>
        </div>
    )
}

export default Banner