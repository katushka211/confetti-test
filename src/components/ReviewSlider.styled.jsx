import styled from 'styled-components';
import Slider from 'react-slick';

export const ReviewsWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

export const StyledReviewSlider = styled(Slider)`
  .slider-list {
    display: flex;
    justify-content: center;
  }

  .slick-slide {
    /* display: flex;
    justify-content: center;
    margin: 0 auto; */
  }

  .slick-prev,
  .slick-next {
    background: #fff;
    top: 130%;
  }
  .slick-next {
    right: 40%;
  }

  .slick-prev {
    left: 40%;
  }
  .slick-track {
    display: flex;
    gap: 24px;
  }
  .slick-dots {
    bottom: -50px;
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border: 1px solid #d2d2d2;
  width: 56px;
  height: 56px;
  svg {
    stroke: #222222;
    fill: none;
  }
`;
