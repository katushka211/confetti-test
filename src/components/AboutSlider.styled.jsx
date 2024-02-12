import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrap = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: ${p => p.theme.media.s}) {
    max-width: 480px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slider-list {
    /* display: flex;
    justify-content: center; */
  }

  .slick-slide {
    /* display: flex;
    justify-content: center;
    margin: 0 auto; */
  }
  .slick-track {
    display: flex;
    gap: 24px;
  }
  .slick-dots {
    bottom: -50px;
  }
`;
