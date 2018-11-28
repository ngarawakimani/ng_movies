import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import axios from 'axios';

class MovieSlider extends React.Component{
    
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b5ccba8bb0943eeceabfc9982bb349d7&language=en-US')
        .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
            //console.log(movies);
        })
    }

    render() {
        
        var settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (

            <div className="col-md-12">
    
                <div className="row my-5">
                    <h4 className="mx-4 w-100">Popular Movies</h4>
                    <span className="mx-4 title-span"></span>
                </div>  
    
                <div className="w-100">

                    <Slider {...settings}>

                        {
                            this.state.movies.map(
                                movie => 
                                
                                    <div className="card bg-transparent border-0">
                                        <Link to={'/detail/movie/'+ movie.id}>
                                            <img className="card-img-top img-fluid" src={"http://image.tmdb.org/t/p/original/"+ movie.poster_path} alt="Card image cap" />
                                            <div className="card-body px-0">
                                                <h6 className="card-title mb-0">{movie.original_title}</h6>
                                            </div>
                                        </Link>
                                    </div>
                            )
                        }
                      
                    </Slider>
                    
                </div>
    
            </div>
        );

    }
}

export default MovieSlider;