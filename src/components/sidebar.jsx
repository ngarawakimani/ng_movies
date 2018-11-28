import React from 'react';
import {Link} from 'react-router-dom'

class SideBar extends React.Component{

    render() {

        return (

            <nav id="sidebar" className="active">
                <div className="sidebar-header">
                    <Link to="/">
                        <strong>NG</strong>
                        <b>Movies</b>
                    </Link>
                </div>

                <ul className="list-unstyled components mt-5">
                    <li className="active">
                        <Link to="/">
                            <i className="fas fa-home"></i><br/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/trending">
                            <i className="fas fa-film"></i><br/>
                            Trending
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <i className="fas fa-film"></i><br/>
                            Movies
                        </Link>
                    </li>
                    <li>
                        <a href="/series">
                            <i className="fas fa-tv"></i><br/>
                            Series
                        </a>
                    </li>
                    
                </ul>
            </nav>

        );

    }
}

export default SideBar;