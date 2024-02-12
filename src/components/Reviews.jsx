import { Container, Title, ReviewsList, ReviewSection } from './Reviews.styled';
import { Review } from './Review';
import reviewsData from '../utils/reviewsData.json';
import { useEffect, useState } from 'react';
import { ReviewSlider } from './ReviewSlider';

export const Reviews = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1280);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ReviewSection>
      <Container>
        <Title>Recenzje</Title>
        {isDesktop ? (
          <ReviewsList>
            {reviewsData.map((review, index) => (
              <Review
                reviewText={review.review}
                author={review.author}
                key={index}
              />
            ))}
          </ReviewsList>
        ) : (
          <ReviewSlider />
        )}
      </Container>
    </ReviewSection>
  );
};
