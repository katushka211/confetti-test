import PropTypes from 'prop-types';
import { CardWrapper } from './Card.styled';

export const Card = ({ title, description, bgColor }) => {
  return (
    <CardWrapper bgColor={bgColor}>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};
