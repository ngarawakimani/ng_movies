import React from 'react';
import MovieSlider from '../components/sliders/movie';
import SeriesSlider from '../components/sliders/series';
import TrendingSlider from '../components/sliders/trending';

class Home extends React.Component{

    componentDidMount(){
        
    }

    render() {

        return (
                                        
            <div className="row">

                <TrendingSlider />

                <MovieSlider />

                <SeriesSlider />

            </div>

        );

    }
    
}

export default Home;