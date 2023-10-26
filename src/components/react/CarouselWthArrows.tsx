import React from 'react';
import Slider from 'react-slick';

import '../../css/carouselArrows.css';

interface CarouselProps {
  images: string[];
}

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </svg>
  </div>
);

const Carousel = ({ images = [] }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: '0',
  };
  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx} className="image-container px-10 py-4">
          <img src={img} alt={`Imagen ${idx}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
