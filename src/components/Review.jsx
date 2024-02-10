import PropTypes from 'prop-types';
import { ReviewWrap } from './Review.styled';
export const Review = ({ reviewText, author }) => {
  return (
    <ReviewWrap>
      <p>{reviewText}</p>
      <p>{author}</p>
    </ReviewWrap>
  );
};

Review.propTypes = {
  reviewText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
