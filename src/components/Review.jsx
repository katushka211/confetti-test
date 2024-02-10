import PropTypes from 'prop-types';
import { ReviewAuthor, ReviewText, ReviewWrap } from './Review.styled';
export const Review = ({ reviewText, author }) => {
  return (
    <ReviewWrap>
      <ReviewText>{reviewText}</ReviewText>
      <ReviewAuthor>{author}</ReviewAuthor>
    </ReviewWrap>
  );
};

Review.propTypes = {
  reviewText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
