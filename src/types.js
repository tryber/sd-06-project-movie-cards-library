import PropTypes from 'prop-types';

const movie = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default movie;