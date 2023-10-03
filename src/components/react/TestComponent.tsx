import React from 'react';
import Slider from 'react-slick';

const TestComponent = () => {
  return (
    <Slider>
      <div>
        <img src="test-image-url-1.jpg" alt="Test 1" />
      </div>
      <div>
        <img src="test-image-url-2.jpg" alt="Test 2" />
      </div>
    </Slider>
  );
};

export default TestComponent;
