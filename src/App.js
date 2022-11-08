import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./component/header/Header";
import Home from './pages/home/home';
import Movie from './pages/movies/movie';
import TVshow from './pages/tvShow/tvShow';
import Event from './pages/event/event';
import Search from './pages/search/search';

class App extends React.Component {
  state = {
    redirect: false,
    searchText: "",
    search:0
  }
  onSearch = (searchText) => {
    this.setState({searchText: searchText, redirect: true, search: this.state.search+1},()=>{
      this.setState({redirect:false})
    });
  }
  render(){
    return (
      <div className="App">
          <Router>
            <Header onSearch={this.onSearch} redirect={this.state.redirect}/>
              <Routes>
                  <Route index element={<Home />}></Route>
                  <Route path="search/:searchText" element={<Search key={window.location.href} />}></Route>
                  <Route path="movies/:id" element={<Movie />}></Route>
                  <Route path="tvshow/:id" element={<TVshow />}></Route>
                  <Route path="event/:id" element={<Event />}></Route>
                  <Route path="/*" element={<h1>Error Page</h1>}></Route>
              </Routes>
          </Router>
      </div>
    );
  }
}

export default App;
