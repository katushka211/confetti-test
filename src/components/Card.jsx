import PropTypes from 'prop-types';
import { CardText, CardTitle, CardWrapper } from './Card.styled';

export const Card = ({ title, description, bgColor, paddingRight }) => {
  return (
    <CardWrapper color={bgColor}>
      <CardTitle>{title}</CardTitle>
      <CardText style={{ paddingRight }}>{description}</CardText>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  paddingRight: PropTypes.string,
};
