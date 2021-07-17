import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Series from './components/Series'
import Movie from './components/Movie'
import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="">

            <Router>
            <Header/>

            <switch>
            <Route exact path="/" component={Body} />

               <Route exact path="/series" component={Series} />
               <Route exact path="/movie" component={Movie} />
            </switch>
            <Footer/>
           </Router>
        </div>
    </div>
     
  );
}

export default App;
