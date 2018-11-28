import React, { Component } from 'react';
import SideBar from './components/sidebar';
import NavBar from './components/nav';
import Routes from './routes/routes';
import './styles/App.css';

class App extends Component {

  render() {

    return (

      <div className="wrapper">

        <SideBar />

        <div id="content" className="px-4">

          <NavBar />

          <Routes />

          <div className="col-md-12 text-center mt-5">

            <small> By <a href="http://ngara.co.ke">Dancan Kimani</a></small>

          </div>

        </div>

      </div>

    );
  }
}

export default App;
