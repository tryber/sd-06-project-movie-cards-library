import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
    render() {
    const {Movies} = this.props

    return (
        <div className='movie-list'>
            {Movies.map((filme) => {
                return <MovieCard 
                    hey={filme.title}
                    movie={filme}
                />
            })}
        </div>
    );
    }
} 


export default MovieList