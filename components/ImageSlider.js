import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@styles/ImageSlider.module.css'
import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const images = [
    {src: '/ant-Man-and-the-wasp-2023.webp',  href: '../../Hollywood/AntMan-2023/AntMan' },
    {src: '/erotica-manila-2023.webp', href: 'https://example.com/page2'},
    {src: '/hunt-2023.webp', href: 'https://example.com/page3'},
  ];
  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <button type="button" className="arrow-prev" onClick={onClickHandler} title={label}>
      <i className="fa fa-chevron-left"></i>
    </button>
  );

const renderArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <button type="button" className="arrow-next" onClick={onClickHandler} title={label}>
      <i className="fa fa-chevron-right"></i>
    </button>
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOnClick = (event, href) => {
    event.preventDefault();
    window.location.href = href;
  }
  return (
    
    <div className="slider-container rounded-3xl  flex  border-1 border-blue-600 bg-gray-600 p-2">
      <Carousel showArrows={true} showThumbs={false} showStatus={false} vertical={true} infiniteLoop={true} interval={2000} selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}>
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <a href={image.href}>
              <img src={image.src} />
            </a>
          </div>
        ))}
      </Carousel>
      <style jsx>{`
     .arrow-prev,
     .arrow-next {
       position: absolute;
       top: 50%;
       transform: translateY(-50%);
       background-color: transparent;
       border: none;
       cursor: pointer;
       outline: none;
       z-index: 1;
     }
     
     .arrow-prev {
       left: 20px;
     }
     
     .arrow-next {
       right: 20px;
     }
     
     .arrow-prev i,
     .arrow-next i {
       font-size: 24px;
       color: #fff;
     }
     
      `}</style>
    </div>
  );
}

export default ImageSlider;
