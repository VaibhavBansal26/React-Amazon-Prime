import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import DetailsPage from './components/DetailsPage';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SearchPage from './components/SearchPage';
import { selectUserName } from './features/user/userSlice';


function App() {
  const user = useSelector(selectUserName);
  return (
    <Router>
      <Header/>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/search/:searchTerm">
          <SearchPage/>
        </Route>
        <Route path="/details/:id/:par">
          <DetailsPage/>
        </Route>
        <Route exact path="/">
          {!user ?
          <Login/>:
          <>
          <Banner/>
          <Home/>
          </>
          }
        </Route>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
