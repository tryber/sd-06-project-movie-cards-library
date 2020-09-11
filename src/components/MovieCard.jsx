import {Component} from 'react';
import Rating from './Rating';
import movies from '../data';
class MovieCard extends Component {
  render() {
    const {image} = this.props;
    return <div>
      <div>
        <img src={image}/>
      </div>
      <div>
        <h2></h2>
        <h3></h3>
        <p></p>
      </div>
      <Rating value={movies[0].rating}/>
    </div>
  }
}

export default MovieCard;