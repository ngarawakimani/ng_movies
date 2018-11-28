import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Trending extends React.Component{
    
    state = {
        trending: []
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=b5ccba8bb0943eeceabfc9982bb349d7')
        .then(res => {
            const trending = res.data.results;
            this.setState({ trending });
            //console.log(movies);
        })
    }

    render (){

        return (
            
            <div className="col-md-12">
        
                <div className="row my-5">
                    <h4 className="mx-4 w-100">Trending</h4>
                    <span className="mx-4 title-span"></span>
                </div>  

                <div className="row">

                    {

                        this.state.trending.map(

                            (trending,index) => {

                                if (index % 8 === 0) {

                                }
                                        
                                return (
                                    <div className="col-md-2 card bg-transparent border-0 p-4">
                                        <Link to={'/detail/movie/'+ trending.id}>
                                            <img className="card-img-top img-fluid" src={"http://image.tmdb.org/t/p/original/"+ trending.poster_path} alt="Card image cap" />
                                            <div className="card-body px-0">
                                                <h6 className="card-title mb-0">{trending.original_title}</h6>
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

export default Trending;