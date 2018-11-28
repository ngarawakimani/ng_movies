import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../views/home';
import Movies from '../views/movies';
import Trending from '../views/trending';
import Series from '../views/series';
import Search from '../views/search';
import Detail from '../views/detail';

class Routes extends React.Component{

    render (){

        return(

            <div className="">

                <Route exact path="/" component={Home} />

                <Route exact path="/trending" component={Trending} />

                <Route exact path="/movies" component={Movies} />

                <Route exact path="/series" component={Series} />

                <Route path="/search" render={(props) => <Search {...props} />}/> 

                <Route path="/detail/:type/:id" render={(props) => <Detail {...props} />}/> 

            </div>

        );

    }

}

export default Routes;