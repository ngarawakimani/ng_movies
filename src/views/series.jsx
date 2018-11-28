import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Series extends React.Component{
    
    state = {
        series: []
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=b5ccba8bb0943eeceabfc9982bb349d7&language=en-US&page=1')
        .then(res => {
            const series = res.data.results;
            this.setState({ series });
            //console.log(series);
        })
    }

    render() {

        return (
            
            <div className="col-md-12">
        
                <div className="row my-5">
                    <h4 className="mx-4 w-100">Popular Series</h4>
                    <span className="mx-4 title-span"></span>
                </div>  

                <div className="row">
                    {
                        this.state.series.map(
                            series => 
                                
                                <div className="col-md-2 card bg-transparent border-0 p-4">
                                    <Link to={'/detail/tv/'+ series.id}>
                                        <img className="card-img-top img-fluid" src={"http://image.tmdb.org/t/p/original/"+ series.poster_path} alt="Card image cap" />
                                        <div className="card-body px-0">
                                            <h6 className="card-title mb-0">{series.name}</h6>
                                        </div>
                                    </Link>
                                </div>
                        )
                    }
                </div>

            </div>

        );

    }
}

export default Series;