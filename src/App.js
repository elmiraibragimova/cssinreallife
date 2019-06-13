import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import MainPage from './components/pages/MainPage';
import TagsPage from './components/pages/TagsPage';
import TagPage from './components/pages/TagPage';

import './assets/styles/main.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <Nav />

      <main className="page__content">
        <Router>
            <Route path="/" exact component={MainPage} />
            <Route path="/tags/" exact component={TagsPage} />
            <Route path="/tags/:id" component={TagPage} />
        </Router>
      </main>

      <Footer />
    </div>
  );
}

export default App;
