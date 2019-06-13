import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import MainPage from './components/pages/MainPage';
import TagsPage from './components/pages/TagsPage';

import './assets/styles/main.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <Nav />
      <main className="page__content">
        <TagsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
