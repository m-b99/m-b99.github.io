import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";


const certificationsData = [
    {
      id: 1,
      imageUrl: require('../../Assets/certif/cloud_page-0001.jpg').default,
    },
    {
      id: 2,
      imageUrl: require('../../Assets/certif/command-line1_page-0001.jpg').default,
    },
    {
      id: 3,
      imageUrl: require('../../Assets/certif/command-line2_page-0001.jpg').default,
    },
    {
      id: 4,
      imageUrl: require('../../Assets/certif/devops_page-0001.jpg').default,
    },
    {
      id: 5,
      imageUrl: require('../../Assets/certif/git_page-0001.jpg').default,
    },
    {
      id: 6,
      imageUrl: require('../../Assets/certif/java8_page-0001.jpg').default,
    },
    {
      id: 7,
      imageUrl: require('../../Assets/certif/lambda_page-0001.jpg').default,
    },
    {
      id: 8,
      imageUrl: require('../../Assets/certif/multitascking_page-0001.jpg').default,
    },
    {
      id: 9,
      imageUrl: require('../../Assets/certif/python_page-0001.jpg').default,
    },
    {
      id: 10,
      imageUrl: require('../../Assets/certif/sql_page-0001.jpg').default,
    },
    {
      id: 11,
      imageUrl: require('../../Assets/certif/ssh_page-0001.jpg').default,
    },
    {
      id: 12,
      imageUrl: require('../../Assets/certif/threads_page-0001.jpg').default,
    },
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
    prevArrow: <FaArrowLeft />,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="certifications-container">
      <Slider {...settings}>
        {certificationsData.map(certification => (
          <div key={certification.id} className="certification-item">
            <img 
              src={certification.imageUrl} 
              alt={certification.title} 
              className="certification-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Certifications;
