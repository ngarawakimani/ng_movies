import React from 'react';
import { Link } from 'react-router-dom';
import placehoder from '../images/placeholder.jpg';
import axios from 'axios';
import queryString from 'query-string';

class Search extends React.Component{
    
    state = {
        search: []
    }

    componentDidMount() {

        const values = queryString.parse(this.props.location.search)

        //console.log(values.search_term);

        axios.get('https://api.themoviedb.org/3/search/multi?api_key=b5ccba8bb0943eeceabfc9982bb349d7&language=en-US&query=' + values.search_term + '&page=1&include_adult=false')
        .then(res => {
            const search = res.data.results;
            this.setState({ search });
            //console.log(series);
        });
    }

    render() {

        return (
            
            <div className="col-md-12">
        
                <div className="row my-5">
                    <h4 className="mx-4 w-100">Search Results</h4>
                    <span className="mx-4 title-span"></span>
                </div>  

                <div className="row">
                    {
                        this.state.search.map(

                            (search) => {

                                if (search.poster_path !== null) {
                                    this.image_url = "http://image.tmdb.org/t/p/w185/" + search.poster_path;
                                } else {
                                    this.image_url = placehoder;
                                }
                                
                                 return (
                                    <div className="col-md-2 card bg-transparent border-0 p-4">
                                        <Link to={'/detail/' + search.media_type + '/'+ search.id}>
                                            <img className="card-img-top img-fluid" src={this.image_url} alt="Card image cap" />
                                            <div className="card-body px-0">
                                                <h6 className="card-title mb-0">{search.name || search.original_title}</h6>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                        )
                    }
                </div>

            </div>

        );

    }
}

export default Search;