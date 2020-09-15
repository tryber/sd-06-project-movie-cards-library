// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    // const { title, subtitle, storyline, imagePath, rating } = this.props.movies;
    const { rating } = this.props;
    return (
      <section className="rating">
        {rating}
      </section>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };
export default Rating;

// REFERENCIAS
// https://pt-br.reactjs.org/
// https://app.rocketseat.com.br/
// https://scrimba.com/
// https://stackoverflow.com/

// GITHUB = ANDERSONS STUBER, PAULO LINS
// https://github.com/HugoDF/jest-spy-mock-stub-reference

// YOUTUBE = "TANTAUM" DE CANAL

// AGRADECIMENTOS ESPECIAIS: AND E PAULO LINS.
