import React from 'react';
import OwlCarousel from 'react-owl-carousel';
export default function SlideAreaStart() {
  return (
    <div className="slider_area">
      <OwlCarousel
        className="owl-theme"
        loop
        items={1}
        autoplay={true}
        autoplayTimeout={7000}
        animateOut={'fadeOut'}
        dots={false}
      >
        <div className="single_slider  d-flex align-items-center slider_bg_1 "></div>
        <div className="single_slider  d-flex align-items-center slider_bg_3 overlay"></div>
        <div className="single_slider  d-flex align-items-center slider_bg_4 overlay"></div>
        <div className="single_slider  d-flex align-items-center slider_bg_5 overlay"></div>
      </OwlCarousel>
    </div>
  );
}
