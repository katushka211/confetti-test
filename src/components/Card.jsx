import PropTypes from 'prop-types';
import { CardText, CardTitle, CardWrapper } from './Card.styled';

export const Card = ({ title, description, bgColor }) => {
  return (
    <CardWrapper color={bgColor}>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};
