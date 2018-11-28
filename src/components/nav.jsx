import React from 'react';

class NavBar extends React.Component{

    render() {

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">

                    <h3 className="text-white"><strong>NG</strong></h3>

                    <button type="button" id="sidebarCollapse" className="btn btn-info d-none">
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    <button className="mobile-menu btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="ml-auto navbar-form" action="/search/">
                            <div className="input-group add-on bg-transparent border">
                                <input className="form-control bg-transparent border-0 text-white" placeholder="Search" name="search_term" id="srch-term" type="text"/>
                                <div className="input-group-btn bg-transparent">
                                    <button className="btn btn-default bg-transparent" type="submit"><i className="fas fa-search text-white"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

        );

    }
    
}

export default NavBar;