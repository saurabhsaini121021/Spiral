import React from 'react'
import './App.css';
import Home from './Pages/Home'
import SearchPage from './Pages/SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
            <div className="date">© Saurabh Saini &nbsp; {new Date().getFullYear()}</div>

          </Route>
          {/* Home */}
          <Route path="/">
            <Home />

          </Route>
          {/* Search Results */}
          {/*  */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
