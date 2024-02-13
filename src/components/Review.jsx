import PropTypes from 'prop-types';
import {
  ReviewAuthor,
  ReviewAuthorWrap,
  ReviewText,
  ReviewWrap,
} from './Review.styled';
import sprite from '../images/svg/symbol-defs.svg';
export const Review = ({ reviewText, author }) => {
  return (
    <ReviewWrap>
      <ReviewText>{reviewText}</ReviewText>
      <ReviewAuthorWrap>
        <svg width={24} height={24}>
          <use href={sprite + `#tag-user`} />
        </svg>
        <ReviewAuthor>{author}</ReviewAuthor>
      </ReviewAuthorWrap>
    </ReviewWrap>
  );
};

Review.propTypes = {
  reviewText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
