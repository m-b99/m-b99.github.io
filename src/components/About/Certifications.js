import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificationsData = [
  {
    id: 1,
    title: 'Certification Name 1',
    issuer: 'Certification Issuer 1',
    date: 'Date Earned 1',
    imageUrl: require('../../Assets/certif/java8.png').default,
    id: 2,
    title: 'Certification Name 1',
    issuer: 'Certification Issuer 1',
    date: 'Date Earned 1',
    imageUrl: require('../../Assets/certif/java8.png').default,
  },
  // Add more certification objects here if needed
];

function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />
  };

  return (
    <div>
      <Slider {...settings}>
        {certificationsData.map(certification => (
          <div key={certification.id}>
            <img 
              src={certification.imageUrl} 
              alt={certification.title} 
              className="certification-image"
            />
            <div>
              <h3>{certification.title}</h3>
              <p>{certification.issuer}</p>
              <p>{certification.date}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Certifications;
