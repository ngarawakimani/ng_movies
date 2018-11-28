import React from 'react';
import axios from 'axios';

class Detail extends React.Component{
    
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/' + this.props.match.params.type + '/'+this.props.match.params.id+'?api_key=b5ccba8bb0943eeceabfc9982bb349d7&language=en-US')
        .then(res => {
            const movies = res.data;
            this.setState({ movies });
            //console.log(movies);
        })
    }

    render (){

        let base_state = this.state.movies;

        let genre_names = "";

        for( var key in base_state.genres ) {
            genre_names += base_state.genres[key].name + " ";
        }

        let title = "";

        if (this.props.match.params.type === "tv") {

            title = base_state.name;

            this.episodes = () =>{
                return(
                    <div className="row my-2">
                        <p className="mr-4"> {base_state.number_of_episodes} <br/> number of episodes</p>
                        <p className="mx-4"> {base_state.number_of_seasons} <br/> number of seasons</p>
                    </div>
                );
            }

        } else if (this.props.match.params.type === "movie") {

            title = base_state.original_title;

            this.episodes = () =>{
                return(
                    <div className="row my-2">
                    </div>
                );
            }

        }


        const get_hero_url = base_state.backdrop_path;

        if (get_hero_url == null) {

            this.hero_url = base_state.poster_path;

        } else {

            this.hero_url = get_hero_url;

        }

        let heroStyle = {

            backgroundImage: 'url(http://image.tmdb.org/t/p/original/' + this.hero_url + ')',

        };

        return (

            <div className="col-md-12">

                <div className="row" id="movie-hero" style={heroStyle}>
                    <div className="w-100 h-100 overlay"></div>
                </div>

                <div className="container mt-5" id="movie_detail">
                    <div className="row content px-5">
                        <div className="col-md-4">
                            <img src={'http://image.tmdb.org/t/p/original/' + base_state.poster_path} className="img-fluid"/>
                        </div>
                        <div className="col-md-8 mt-5 p-5">
                            <div className="row">
                                <h3>{title}</h3>
                            </div>
                            <div className="row my-2">
                                <p className="mr-4"> {base_state.popularity}% <br/> likes</p>
                                <p className="mx-4"> {base_state.vote_average} <br/> vote average</p>
                                <p className="mx-4"> {base_state.vote_count} <br/> vote count</p>
                            </div>
                            <div className="row my-2">
                                <p>Genres: <small>{genre_names}</small></p>
                            </div>
                            {this.episodes()}
                            <div className="row">
                                <h5>Overview</h5>
                                <p>{base_state.overview}</p>
                            </div>
                            <div className="row text-white mt-4">
                                <a href={base_state.homepage}>
                                    <span><i className="fas fa-play mr-3"></i> More Details </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }

}

export default Detail;