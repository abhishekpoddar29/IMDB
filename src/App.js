import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./component/header/Header";
import Home from './pages/home/home';
import Movie from './pages/movies/movie';
import TVshow from './pages/tvShow/tvShow';
import Event from './pages/event/event';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movies/:id" element={<Movie />}></Route>
                <Route path="tvshow/:id" element={<TVshow />}></Route>
                <Route path="event/:id" element={<Event />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
