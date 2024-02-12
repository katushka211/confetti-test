import { StyledSlider } from './AboutSlider.styled';
import cardsData from '../utils/cardsData.json';
import { Card } from './Card';
import { SliderWrap } from './AboutSlider.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const AboutSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderWrap>
      <StyledSlider {...settings}>
        {cardsData.map((card, index) => (
          <Card
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            paddingRight={card.paddingRight}
            key={index}
          />
        ))}
      </StyledSlider>
    </SliderWrap>
  );
};
