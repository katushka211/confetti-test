import reviewsData from '../utils/reviewsData.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Review } from './Review';
import { Arrow, ReviewsWrap, StyledReviewSlider } from './ReviewSlider.styled';
import sprite from '../images/svg/symbol-defs.svg';
import PropTypes from 'prop-types';

export const ReviewSlider = () => {
  const SampleNextArrow = ({ className, onClick }) => {
    return (
      <Arrow className={className} onClick={onClick}>
        <svg width={24} height={24}>
          <use href={sprite + `#arrow-right`} />
        </svg>
      </Arrow>
    );
  };

  const SamplePrevArrow = ({ className, onClick }) => {
    return (
      <Arrow className={className} onClick={onClick}>
        <svg width={24} height={24}>
          <use href={sprite + `#arrow-left`} />
        </svg>
      </Arrow>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 3,
    slidesToShow: 3,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <ReviewsWrap>
      <StyledReviewSlider {...settings}>
        {reviewsData.map((review, index) => (
          <Review
            reviewText={review.review}
            author={review.author}
            key={index}
          />
        ))}
      </StyledReviewSlider>
    </ReviewsWrap>
  );
};

ReviewSlider.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
