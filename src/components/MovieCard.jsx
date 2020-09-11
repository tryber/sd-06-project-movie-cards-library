import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        const { title, subtitle, storyline, rating, imagePath } = this.props;
        return (
            <div>
                <div>
                    <img src={imagePath} alt="Imagem do Filme"/>
                </div>
                <div>
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <p>{storyline}</p>
                </div>
            </div>
        )
    }
}

export default MovieCard;
