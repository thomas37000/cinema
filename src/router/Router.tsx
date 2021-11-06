import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardMoviesById from '../components/Card/CardMovieById';
import Home from '../components/Home';
import Navbar from '../components/Nav/Nav';

const Routter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie/:id' component={CardMoviesById} />
      </Switch>
    </Router>
  );
};

export default Routter;
